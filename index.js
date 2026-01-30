import express from 'express'
import { MongoClient } from 'mongodb'
const app =  express()

const port = 3200

const dbneam = 'school'
const url = 'mongodb+srv://muhabbatali:myworldisstart$$$@cluster0.fepov5t.mongodb.net/'

const client = new MongoClient(url)


app.get('/', (req,res) => {
    const user = ["papan","lalan","kemu"]
    let deta = ``
    for(let i = 0; i<user.length;i++) {
        console.log(user[i])
        res.end()
    }
})
app.listen(port, () => {
    console.log("http://localhost:"+port)
})