'use strict'

const express = require('express')
const router = express.Router()


// C
router.post('/', (req, res, next) => {
  const { item } = req.body
  // code goes here
})

// L
router.get('/', (req, res, next) => {
  // render template here
  
})

// R
router.get('/:id', (req, res, next) => {
  const id = Number(req.params.id)
  // code goes here
})

// U
router.patch('/:id', (req, res, next) => {
  const id = Number(req.params.id)
  const { item } = req.body
  // code goes here
})

// D
router.delete('/:id', (req, res, next) => {
  const id = Number(req.params.id)
  // code goes here
})

module.exports = router
