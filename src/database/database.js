const mongoose = require('mongoose');

module.exports = mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/summitdb', { useNewUrlParser: true, useUnifiedTopology: true });

