const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb://localhost:27017/Personali', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log(`MongoDB connected ${conn.connection.host} `);
  } catch (err) {
    console.log(`Error occured:${err.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;


