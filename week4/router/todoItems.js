const express = require("express")
const todoItems = express.Router()
const uuid = require("uuid")

const todos = [
    {
        title: "Clean the House",
        description: "Make the house sparkle",
        imageUrl: "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8Y2xlYW4lMjBob3VzZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60",
        completed: false,
        _id: uuid.v4()
    }
]


todoItems.get("/", (req, res) => {
    res.send(todos)
})

todoItems.get("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const selectTodo = todos.find(b => b._id === todoId)
    res.send(selectTodo)
})

todoItems.post("/", (req, res) => {
    const newTodo = req.body
    newTodo._id = uuid.v4()
    todos.push(newTodo)
    res.send(`${newTodo.title} was added to your list!`)
})

todoItems.delete("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(b => b._id === todoId)
    todos.splice(todoIndex, 1)
    res.send("Todo deleted")
})

todoItems.put("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const updateObject = req.body
    const todoIndex = todos.findIndex(b => b._id === todoId)
    const updatedTodo = Object.assign(todos[todoIndex], updateObject)
    res.send(updatedTodo)
})

module.exports = todoItems