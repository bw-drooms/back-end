const jwt = require('jsonwebtoken');

const secrets = require('../api/secrets/secrets.js');

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if(token) {
  jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
    if(err) {
      //foul play
      res.status(401).json({ message: 'Bad panda!' });
    }else {
      //token is goooood
      req.user = {
        username: decodedToken.username,
        department: decodedToken.department,
      };
      next();
    }
  });

  } else {
    res.status(400).json({ message: 'No token provided' });
  }
};
