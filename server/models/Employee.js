const mongoose = require('mongoose')

const Employees = new mongoose.Schema({
    name:String,
    email:String,
    userId:String,
    mobile:String,
    city:String,
    education:String,
    percentage:String,
    experienace:String
})

const EmployeeSchema = mongoose.model('employees',Employees)

module.exports=EmployeeSchema