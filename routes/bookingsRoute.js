const express = require("express");
const router = express.Router();

const Booking = require("../models/booking");

router.post("/bookRoom", async (req, res) => {
    const {
        room,
        userid,
        fromdate,
        todate,
        totaldays
    } = req.body;

    try {
        const newbooking = new Booking({
            room: room.name,
            roomid: room._id,
            userid,
            fromdate,
            todate,
            totaldays,
            transactionId: '1234' // Assuming this is a placeholder for now
        });

        const booking = await newbooking.save();
        res.send('Room booked successfully')
        res.status(201).json(booking); // Send the saved booking as the response
    } catch (error) {
        console.error(error); // Log the error for debugging purposes
        res.status(500).json({ message: "Failed to book the room", error});
    }           
});

module.exports = router;
