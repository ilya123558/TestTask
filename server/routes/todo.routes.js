const express = require("express")
const TodoController = require("../controllers/todo.controller.js")

const todoController = new TodoController()
const todoRouter = express.Router();

todoRouter.get("/", todoController.getTodos);
todoRouter.post("/create", todoController.createTodo);
todoRouter.put("/update/:id", todoController.updateTodo);
todoRouter.delete("/delete/:id", todoController.deleteTodo);

module.exports = todoRouter;