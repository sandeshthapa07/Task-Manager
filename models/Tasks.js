
const mongoose = require('mongoose');


const taskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Must provide Name"],
        trim:true,
        maxLength:[20,"Name Cannot be more than 20 character"],

    },
    completed:{
        type:Boolean,
        default: false,
    },
})

module.exports = mongoose.model('Task',taskSchema);