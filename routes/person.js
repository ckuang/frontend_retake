var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.get('/', function(req, res) {
  models.Person.findAll().then(function(persons) {
    res.send(persons)
  });
});

router.post('/', function(req, res) {
  models.Person.create(req.body).then(function(person){
    res.send({message: 'Person successfully added!', person})
  })
});

router.get('/:id', function(req, res) {
  models.Person.findOne({
    where: {id: req.params.id},
    include: [models.Experience]
  }).then(function(person) {
    res.send(person)
  });
});

module.exports = router;
