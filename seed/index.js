let persons = require('./person.js')
let experiences = require('./experience.js')
let Person = require('../models').Person
let Experience = require('../models').Experience

const seedyFunction = () => {
  Person.create(persons[0])
  Person.create(persons[1])
  Person.create(persons[2])

  Experience.create(experiences[0])
  Experience.create(experiences[1])
  Experience.create(experiences[2])
  Experience.create(experiences[3])
  Experience.create(experiences[4])
  Experience.create(experiences[5])
}

module.exports = seedyFunction
