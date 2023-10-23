const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb://127.0.0.1:27017/Marketplace';  // Replace with your connection string

mongoose.connect('mongodb://127.0.0.1:27017/Marketplace', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

module.exports = db;
