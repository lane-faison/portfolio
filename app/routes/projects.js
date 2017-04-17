const express = require('express')
const router = express.Router()
const knex = require('../db')

router.get('/', (req, res) => {
  knex('projects')
  .then(result => {
    res.json(result)
  })
  .catch(result => {
    res.status(404)
  })
})

module.exports = router
