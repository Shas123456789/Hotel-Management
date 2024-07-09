//import mongoose from "mongoose";

const mongoose = require("mongoose");

//var mongoURL = 'mongodb+srv://Shashank12:Shashank@cluster0.d3itblt.mongodb.net/'
mongoose.connect('mongodb://localhost:27017/Hotels_Rooms',{
    //useUnifiedTopology:true, 
    //useNewUrlParser:true
});

var connect = mongoose.connection; // Normal connection baitha h

mongoose.connection.on('error', (err) => {
    console.log("MongoDB connection failed.")
})

mongoose.connection.once('connected', () => {
    console.log("MongoDB Connected.");
})

module.exports = mongoose