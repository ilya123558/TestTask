const TodoService = require('../services/todo.service')

const todoService = new TodoService()

class TodoController {

    async getTodos(req, res) {
        const todos = await todoService.getTodos()
        todos ? res.json(todos) : res.status(404).json({ message: "no found" })
    }

    async createTodo(req, res) {
        const todos = await todoService.createTodo(req.body)
        todos ? res.json(todos) : res.status(404).json({ message: "no found" })
    }

    async updateTodo(req, res) {
        const todos = await todoService.updateTodo(req.params.id, req.body)
        todos ? res.json(todos) : res.status(404).json({ message: "no found" })
    }

    async deleteTodo(req, res) {
        const todos = await todoService.deleteTodo(req.params.id)
        todos ? res.json(todos) : res.status(404).json({ message: "no found" })
    }

};
module.exports = TodoController