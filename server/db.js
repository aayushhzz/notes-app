const mongoose = require('mongoose');

const MONGO_URI = 'mongodb://localhost:27017/';


const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('DB connected');
  } catch (error) {
    console.error('DB connection failed');
    process.exit(1);
  }
}


module.exports = connectDB;