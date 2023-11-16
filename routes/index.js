const express = require('express');
const route = express.Router();
const TodoRoutes = require('./Todo.route');
const UserRoutes = require('./User.route');
const AuthRoutes = require('./auth.route');
const AuthToken = require('../middlewares/auth.middleware');

route.use('/auth', AuthRoutes);
route.use('/users', AuthToken, UserRoutes);
route.use('/todos', AuthToken, TodoRoutes);

module.exports = route;
