var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.post('/', function(req, res) {
  models.Experience.create(req.body).then(function(experience) {
    res.send({message: 'Experience successfully added!', experience})
  });
});

router.put('/:id', function(req, res) {
  models.Experience.update(
    req.body,
    {where: {id: req.params.id}}
  ).then(function(experience) {
    res.send({message: 'Experience successfully edited!', experience})
  });
})

router.delete('/:id', function(req, res) {
  models.Experience.destroy(
    {where: {id: req.params.id}}
  ).then(function(experience) {
    res.send({message: 'Experience successfully deleted!', experience})
  })
})

module.exports = router;
