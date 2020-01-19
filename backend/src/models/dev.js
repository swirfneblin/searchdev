const mongoose = require('mongoose');
const PointSchema = require('./utils/pointSchema');

const devSchema = new mongoose.Schema({
  name: String,
  github_username: String,
  avatar_url: String,
  techs: [String],
  bio: String,
  location: {
    type: PointSchema,
    index: '2dsphere',
  },
});

module.exports = mongoose.model('Dev', devSchema);
