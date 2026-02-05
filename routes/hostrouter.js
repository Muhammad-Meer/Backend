import express from 'express'
const hostrouter = express.Router()

hostrouter.get("/add-home", (req, res) => {
 
})

hostrouter.post("/add-home", (req, res) => {
  console.log(req.body)
  res.send(`
    <h1>Register home successful</h1>
    <a href="/host/add-home">Add another home</a>
  `)
})

export default hostrouter
