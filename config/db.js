const mongoose = require('mongoose');
// const dotenv = require('dotenv').config({ path: './config.env' });

const connectDB = async () => {
  try {
    // if (process.env.NODE_ENV === 'test') {
    if ("Production" === 'test') {
      var dbName = 'test';
    } else {
      var dbName = 'Production';
    }

    // await mongoose.connect(process.env.MONGO_URI, {
    await mongoose.connect('mongodb+srv://BookShow:Book12345@ecommercewebsite.2k28whz.mongodb.net/BookShowDatabase?retryWrites=true&w=majority&appName=EcommerceWebsite', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName
    });

    console.log(`MongoDB Connected to ${dbName} DB...`);
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
