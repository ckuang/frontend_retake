var models  = require('../models');
var express = require('express');
var router  = express.Router();
var personRouter = require('./person.js')
var experienceRouter = require('./experience.js')

router.use("/persons", personRouter)
router.use("/experiences", experienceRouter)

module.exports = router;
