const express = require('express');


const { getuser } = require('../controller/getuser');

module.exports = function(app) {
app.get('/api/users/:id', getuser);
};