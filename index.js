import express from "express";

const app = express();

app.get("/", (req, res) => {
  console.log(req.url, req.method);
  res.send(`<h1> welcome to airbnb</h1>
    <a href="/add-home">add home</a>
    `);
});

app.get("/add-home", (req, res) => {
  console.log(req.url, req.method);
  res.send(`<h1>rigester your  home here  </h1>
      <form action="/add-home" method="post">
     <input type="text" name="houseneam" placeholder="enter your house neam">
     <input type="submit">
  </form>
    `);
});


app.post("/add-home", (req, res) => {
  console.log(req.url, req.method);
  res.send(`<h1>rigester your  home successful </h1>
      <form action="/add-home" method="post">
     <input type="text" name="houseneam" placeholder="enter your house neam">
     <input type="submit">
  </form>
    `);
});




const port = 3200;
app.listen(port, () => {
  console.log("http://localhost:" + port);
});
