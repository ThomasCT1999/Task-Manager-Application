const mongoose = require('mongoose');

const credentialsSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
});

const Credentials = mongoose.model('Credentials', credentialsSchema, 'credentials');

module.exports = Credentials;
