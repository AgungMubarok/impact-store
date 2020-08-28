const express = require('express');
const db = require('./config/db');
const bodyParser = require('body-parser')

const userRouter = require('./routes/Users')
const productsRouter = require('./routes/Products')
const productImageRouter = require('./routes/ProductImage')
const cartsRouter = require('./routes/Carts')
const transactionsRouter = require('./routes/Transactions')

const app = express()


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

app.listen(8000, ()=> {
    console.log('connected')
})