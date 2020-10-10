const express = require('express')
const router = express.Router()
const animalRoutes = require('./noteRoutes')


//! how does this let our app know about the routes
router.use(animalRoutes);


module.exports = router;