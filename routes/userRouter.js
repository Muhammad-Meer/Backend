import express from 'express'

const userrouter = express.Router()

userrouter.get("/", (req, res) => {
  res.send(`
    <h1>welcome to airbnb</h1>
    <a href="/add-home">add home</a>
  `)
})

export default userrouter

