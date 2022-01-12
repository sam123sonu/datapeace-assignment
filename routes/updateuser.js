const express = require('express');


const { updateuser } = require('../controller/updateuser');

module.exports = function(app) {
app.put('/api/users/:id', updateuser);
};