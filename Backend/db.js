const mongoose = require('mongoose');

const MongoDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/zipline');
    console.log('MongoDB connected');

  } catch (err) {
    console.error(err);

  }
  setTimeout(() => {
    console.log("conneted")
  }, 2000);
};

module.exports = MongoDB();
