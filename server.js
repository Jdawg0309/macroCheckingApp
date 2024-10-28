const express = require('express')
const app = express()

app.use(express.static("public"))
app.use(express.urlencoded( { extended: true }))
app.use(express.json())

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render("index")
})

const userRouter = require('./routes/data')

app.use('/data', userRouter)


app.listen(3000)