const fs = require('fs');
const path = require('path');

const userController = {
  register: (req, res) => {
    res.render('register')
  },
};

module.exports = userController;