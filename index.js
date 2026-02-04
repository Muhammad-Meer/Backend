import express from "express";
import userrouter from './routes/userRouter.js'

const app = express();
app.use(express.urlencoded({extended: true}));



app.use(userrouter)
app.get("/add-home", (req, res) => {
  res.send(`<h1>rigester your  home here  </h1>
      <form action="/add-home" method="post">
     <input type="text" name="houseneam" placeholder="enter your house neam">
     <input type="submit">
  </form>
    `);
});


app.post("/add-home", (req, res) => {
  console.log(req.body);
  res.send(`<h1>rigester your  home successful </h1>
    <a href="/">add home</a>
    `);
});




const port = 3200;
app.listen(port, () => {
  console.log("http://localhost:" + port);
});
