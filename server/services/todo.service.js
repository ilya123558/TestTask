const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, '../todos.json')

class TodoService {

    async getTodos() {
        try {
            const todos = JSON.parse(fs.readFileSync(filePath, "utf8"))
            return todos
        }
        catch (e) {
            console.log(e.message)
            return
        }
    }

    async createTodo(body) {
        try {
            const todos = JSON.parse(fs.readFileSync(filePath, "utf8"))
            const todo = { id: Date.now(), ...body }
            todos.push(todo)
            fs.writeFileSync(filePath, JSON.stringify(todos))
            return todo
        }
        catch (e) {
            console.log(e.message)
            return
        }
    }

    async updateTodo(id, body) {
        try {
            let todos = JSON.parse(fs.readFileSync(filePath, "utf8"))
            todos = todos.map(todo => {
                if (todo.id === Number(id)) {
                    return { ...todo, ...body }
                }
                return todo
            })
            const todo = todos.find(todo => todo.id === Number(id))
            fs.writeFileSync(filePath, JSON.stringify(todos))
            return todo
        }
        catch (e) {
            console.log(e.message)
            return
        }
    }

    async deleteTodo(id) {
        try {
            let todos = JSON.parse(fs.readFileSync(filePath, "utf8"))
            const deleteTodo = todos.find(todo => todo.id === Number(id))
            todos = todos.filter(todo => todo.id !== Number(id))
            fs.writeFileSync(filePath, JSON.stringify(todos))
            return deleteTodo
        }
        catch (e) {
            console.log(e.message)
            return
        }
    }

};
module.exports = TodoService