const assert = require('assert')

const tasks = require('../src/tasks')
// assert.equal(actual, expected[, message])

todo = tasks.create()

first = todo.createTask()

first.setDescription('This is the first task.')

console.log(todo)
