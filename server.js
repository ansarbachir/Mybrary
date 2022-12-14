 
/*
if(process.env.NODE_ENV !== 'production'){
    require('dotenv').parse()
}
*/
 
const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const mongoose =require('mongoose')
const bodyParser = require('body-parser')


const indexRouter = require('./routes/index')
const authorRouter = require('./routes/authors')


const uri= "mongodb+srv://bachir:Anes16082020@cluster0.thvkxd0.mongodb.net/?retryWrites=true&w=majority"

app.set('view engine','ejs')
app.set('views',__dirname + '/views')
app.set('layout','layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))
app.use(bodyParser.urlencoded({limit :'10mb',extended : false}))


  mongoose.connect(uri,{useNewUrlParser:true})

 const db = mongoose.connection
 db.on('error', error => console.error(error))
 db.once('open', () => console.log('connected to mongoose'))
 
app.use('/',indexRouter)
app.use('/authors',authorRouter)

app.listen(3000)

