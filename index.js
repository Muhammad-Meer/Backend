import express from "express";
import userrouter from './routes/userRouter.js'
 import hostrouter from './routes/hostrouter.js'


const app = express();
app.use(express.urlencoded({extended: true}));


app.use(userrouter)
app.use(hostrouter)




const port = 3200;
app.listen(port, () => {
  console.log("http://localhost:" + port);
});
