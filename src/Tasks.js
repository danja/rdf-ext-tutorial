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
  }

  createTask () {
    this.taskCounter = this.taskCounter + 1
    return Task.create (dataset, uri)
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

static create (dataset, uri) {
  this.node = rdf.quad(rdf.namedNode(uri))
  dataset.add(this.node, rdf.namedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#type'), rdf.namedNode(ns+'Task'))
}

  setDescription (text) {
    dataset.add(this.node, ns+'description', rdf.literal(text))
  }

  getDescription () {
    return dataset.match (this.node, ns+'description')
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
