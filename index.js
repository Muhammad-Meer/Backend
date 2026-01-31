import express from 'express'
import { MongoClient } from 'mongodb'
const app = express()


const dbneam = 'school'
const url = 'mongodb+srv://muhabbatali:myworldisstart$$$@cluster0.fepov5t.mongodb.net/'


const client = new  MongoClient(url)


async function dnFunction() {
   await client.connect()
   const db = client.db(dbneam)
const collectionneam = db.collection('student')

   const result = await collectionneam.find()
   console.log(result)
}
dnFunction()

app.get('/' ,(req, res) => {
    res.end("papan")
})
app.listen(3200, () => {
  console.log("http://localhost:3200")
})