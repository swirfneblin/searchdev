/* eslint-disable no-trailing-spaces */
/* eslint-disable camelcase */
const axios = require('axios');
const Dev = require('../models/dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
  async index(req, res) {
    const devs = await Dev.find();
    return res.json(devs);
  },

  async store(req, res) {
    const {github_username, techs, latitude, longitude} = req.body;
    let dev = await Dev.findOne({github_username});
    
    if (!dev) {
      const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
      const {name = login, avatar_url, bio} = apiResponse.data;

      const techsArray = parseStringAsArray(techs);
      const location = {
        type: 'Point',
        coordinates: [longitude, latitude],
      };

      dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
        location,
      });
    }

    return res.json(dev);
  },

  async update(req, res) {
    const {id, name, techs, bio, latitude, longitude} = req.body;
    const techsArray = parseStringAsArray(techs);
    const location = {
      type: 'Point',
      coordinates: [longitude, latitude],
    };

    let dev = await Dev.updateOne({
      '_id': id,
    }, {
      $set: {
        name,
        bio,
        techs: techsArray,
        location,
      },
    });

    dev = (dev.nModified === 1) ?
      await Dev.findById(id) :
      {message: 'dev nao encontrado'};
  
    return res.json(dev);
  },

  async destroy(req, res) {
    const {name} = req.params;
    const removed = await Dev.remove({github_username: name});

    return res.json({removed});
  },
};
