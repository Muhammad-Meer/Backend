import expreress from 'express'
const app =  expreress()

const port = 3200


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