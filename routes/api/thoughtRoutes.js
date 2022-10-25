const { Thoughts, User } = require('../../controller/');

module.exports = {
  getVideos(req, res) {
    Video.find()
      .then((videos) => res.json(videos))
      .catch((err) => res.status(500).json(err));
  },
