const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const EmployeeSchema = require('./models/Employee')

const app = express()
app.use(express.json())
app.use(cors())

dotenv.config()

mongoose.connect(mongodb+srv://prasad:Prasad123@cluster0.41lzfcw.mongodb.net/?retryWrites=true&w=majority).then(()=>{
    console.log('DB is Connected.....')
}).catch((err)=>{
    console.log(err)
})

app.post('/register',(req,res)=>{
     EmployeeSchema.create(req.body)
     .then((employees)=>{
        res.json(employees)
     }).catch((err)=>{
        res.json(err)
     })
})

app.get('/getallUsers',(req,res)=>{
    EmployeeSchema.find().then(employees=>res.json(employees)).catch((err)=>res.json(err))
})





app.listen(5000,()=>{
    console.log('server is started......')
})
