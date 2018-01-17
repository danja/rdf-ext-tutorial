const assert = require('assert')

const tasks = require('../src/Tasks')
// assert.equal(actual, expected[, message])

tsks = new tasks()

todo = tsks.create()

// first = new Task()

first = todo.createTask()

first.setDescription('This is the first task.')

console.log(todo)
