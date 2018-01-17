'use strict'

const rdf = require('rdf-ext')

const ns = 'http://hyperdata.it/vocabs/todo/'
/**
 * Class representing a set of Tasks.
 */
class Tasks {

  // create a new dataset using the rdf-ext factory
  create () {
    this.dataset = rdf.dataset()
    this.taskCounter = 0
    return this
  }

  createTask () {
    this.taskCounter = this.taskCounter + 1
    let uri = 'http://hyperdata.it/todo/tasks/' + this.taskCounter
    return (new Task()).create(this.dataset, uri)
  }

  /**
   * Get a string representation for the Tasks.
   * @return {string} The string representation.
   */
  toString () {
    return this.dataset.toString()
  }
}

/**
 * Class representing a single Task.
 */
class Task {

 create (dataset, uri) {
   this.node = rdf.namedNode(uri)
   console.log('this.node = '+this.node)

   let predicate = rdf.namedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#type')
   console.log('predicate = '+predicate)

   let object = rdf.namedNode(ns+'Task')
   console.log('object = '+object)

   this.dataset = dataset

  dataset.add(this.node, predicate, object)
  return this
}

  setDescription (text) {
    this.dataset.add(this.node, ns+'description', rdf.literal(text))
  }

  getDescription () {
    return this.dataset.match (this.node, ns+'description')
  }

  setCreated (datetime) {
    DataFactory.triple (this.node, ns+'created', datetime)
  }

  setCompleted (datetime) {
    DataFactory.triple (this.node, ns+'created', datetime)
  }

  setStatus (text) {
    DataFactory.triple (this.node, ns+'created', text)
  }

  setPriority (value) {
    DataFactory.triple (this.node, ns+'created', value)
  }

  setVisibility (value) {
    DataFactory.triple (this.node, ns+'created', value)
  }

  toString () {
    // TODO
  }
}

module.exports = Tasks
