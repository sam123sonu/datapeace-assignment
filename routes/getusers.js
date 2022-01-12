const express = require('express');


const { getusers } = require('../controller/getusers');

module.exports = function(app) {
app.get('/api/users', getusers);
};