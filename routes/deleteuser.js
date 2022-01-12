const express = require('express');


const { deleteuser } = require('../controller/deleteuser');

module.exports = function(app) {
app.delete('/api/users/:id', deleteuser);
};