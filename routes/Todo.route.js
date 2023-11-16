const express = require('express');
const { getAllTodo, AddTodo, getTodoByID, EditTodoByID, DeleteTodoByID, deleteAllTodos } = require('../controllers/Todo.controller');
const route = express.Router();

route.get('/', getAllTodo);
route.get('/:id', getTodoByID);
route.post('/:id', AddTodo);
route.put('/:id', EditTodoByID);
route.delete('/:id', DeleteTodoByID);
route.delete('/', deleteAllTodos);

module.exports = route;
