import express from 'express'
const hostrouter = express.Router()

hostrouter.get("/add-home", (req, res) => {
  res.send(`
    <h1>register your home here</h1>
    <form action="/add-home" method="post">
      <input type="text" name="housename" placeholder="enter your house name">
      <input type="submit">
    </form>
  `)
})

hostrouter.post("/add-home", (req, res) => {
  console.log(req.body)
  res.send(`
    <h1>register your home successful</h1>
    <a href="/add-home">add home</a>
  `)
})

export default hostrouter
