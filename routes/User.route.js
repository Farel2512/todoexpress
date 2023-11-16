const express = require('express');
const { getAllUser, getUserByID, editUserByID, deleteUserByID } = require('../controllers/user.controller');

const route = express.Router();

route.get('/', getAllUser);
route.get('/:id', getUserByID);
route.put('/:id', editUserByID);
route.delete('/:id', deleteUserByID);

module.exports = route;
