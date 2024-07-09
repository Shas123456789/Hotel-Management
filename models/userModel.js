const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
  
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    },

},
{
    timestamps: true
})

const usermodel = mongoose.model('users',userSchema) // isse rooms naam ka field banega databse me.
module.exports = usermodel