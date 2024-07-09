const express = require('express');
const router = express.Router();

const Room = require('../models/room') // room ka location daal rhe h taki database se fetch kr ske

router.get('/getallrooms', async(req, res) => {

    try{
        const rooms = await Room.find({})  // find method ko usme data mil gya toh wo array me return karte ho
        //return res.json({rooms}); // json file bhejta h
        res.send(rooms)
    }catch{
        return res.status(400).send("Error in Fetching Data${error}");  
    }

});


router.post('/getroombyid', async (req, res) => {
    const { roomid } = req.body; // Destructure roomid directly from req.body

    try {
        const room = await Room.findById(roomid); // Find room by its ID
       
        if (!room) {
            return res.status(404).json({ message: "Room not found" });
        }

        res.send(room);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
});



module.exports = router;