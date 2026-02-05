const path = require('path')
import express from 'express'


const userrouter = express.Router()

userrouter.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, '../','views', 'home.html'))
})

export default userrouter
 