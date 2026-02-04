import express from 'express'


const app = express()   // ✅ pehle app banao
app.use(express.urlencoded({extends: false}))

app.set('view engine', 'ejs') // ✅ phir use karo

app.get('/mail', (req, res) => {
  res.render("email")
})
app.post('/model', (req, res) => {
  console.log(req.body)
  res.end()
})

app.listen(3200, () => {
  console.log("http://localhost:3200")
})
