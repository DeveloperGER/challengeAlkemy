const { Schema, model } = require('mongoose')

const recordSchema = new Schema({
    concept:{
        type: String,
        required:true,
    },
    amount:{
        type:Number,
        required:true,
    },
    typeOperation:{
        type:String,
        required:true,
    },
    created:{
        type:Date,
        default:Date.now()
    },
    category:{
        type:String,
        required:true,
    }
},{
    timestamps:true
})

module.exports = model('Records', recordSchema)