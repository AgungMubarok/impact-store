const express = require('express');
const db = require('./config/db');
const bodyParser = require('body-parser')
const cors = require('cors')
const userRouter = require('./routes/Users')
const productsRouter = require('./routes/Products')
const productImageRouter = require('./routes/ProductImage')
const cartsRouter = require('./routes/Carts')
const transactionsRouter = require('./routes/Transactions')
require('dotenv').config()

let PORT = process.env.PORT || 8000

const app = express()

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('welcome')
})

app.use('/', userRouter)
app.use('/', productsRouter)
app.use('/', productImageRouter)
app.use('/', cartsRouter)
app.use('/', transactionsRouter)

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => console.log('we re connected'));

app.listen(PORT, ()=> {
    console.log(`connected AT PORT ${PORT}`)
})