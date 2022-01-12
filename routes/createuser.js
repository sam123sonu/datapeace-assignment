const express = require('express');


const { createuser } = require('../controller/createuser');

module.exports = function(app) {
app.post('/api/users', createuser);
};
  