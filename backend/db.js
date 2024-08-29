//mongodb+srv://nikhilkumar84157:sIA8aBtVJFYrdNo0@cluster0.sn9lq.mongodb.net/

const { mongo } = require("mongoose")
const { boolean } = require("zod")

const mongoose = required("mongoose")
mongoose.connect("mongodb+srv://nikhilkumar84157:sIA8aBtVJFYrdNo0@cluster0.sn9lq.mongodb.net/todos")
const todoSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    completed: {
        type: boolean
    }
    
})

const todo = mongoose.model('todo', todoSchema)
module.exports = {
    todo
}