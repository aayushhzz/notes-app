const connectDB = require('./db.js')
const express = require('express');
const cors = require('cors');
const PORT = 4999;

connectDB();

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use('/api/auth', require('./routes/auth.js'));
app.use('/api/notes', require('./routes/notes.js'));

app.get('/', (req, res) => {
    res.send('Hello, world!');
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});