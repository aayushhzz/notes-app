const jwt = require('jsonwebtoken');

const JWT_SECRET = 'oGzjEdp{F9Z]~h3pmP~yP@2sdvY!bj1kP]1&Qybqaf}SAz2Ym8';

const fetchUser = async (req, res, next) => {
    // Get the user from the jwt token and add id to req object
    const token = await req.header('auth-token');
    if (!token) {
        res.status(401).send({ error: "Please authenticate using a valid token" });
    }
    try {
        const data = await jwt.verify(token, JWT_SECRET);
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).send({ error: "Please authenticate using a valid token" });
    }
}


module.exports = fetchUser;