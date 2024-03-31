const express = require('express')

const router = express.Router()

router.get('/colors', (req, res) => {
  res.status(200)
  res.json("GET /colors")
})

