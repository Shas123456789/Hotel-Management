const mongoose = require("mongoose")

const roomschema = mongoose.Schema({ //Schema matlab ye sirf kaisa dikhega json file me woh j=h
    name:{
        type:String,
        required:true
    },
    maxcount :{
        type:Number,
        required:true
    },
    phonenumber:{
        type:Number,
        required:true
    },
    rentperday:{
        type:Number,
        required:true
    },
    imageurls:[],
    currentbooking:[],
    type:{
        type:String,
        required:true
    },
    desciption:{
        type:String,
        required:true
    }
},{
    timestamps:true, // ye bs time stamp deta h
})

const roommodel = mongoose.model('rooms',roomschema) // isse rooms naam ka field banega databse me.
module.exports = roommodel