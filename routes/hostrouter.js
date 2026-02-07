const path = require('path')

const express = require('express')
const hostrouter = express.Router() 

hostrouter.get("/add-home", (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'home.html'));
});

const rootdir = require("/")