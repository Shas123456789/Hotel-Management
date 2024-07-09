
const express = require('express');
const cors = require('cors');
const app = express();
const dbconfig = require('./db')
const roomsRoute = require('./routes/roomsRoute');
const usersRoute = require('./routes/userRoute')
const bookingRoute = require( './routes/bookingsRoute' )

app.use(cors());
app.use(express.json());

app.use('/api/rooms', roomsRoute);
app.use('/api/users',usersRoute)
app.use('/api/bookings', bookingRoute);

app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
  });
  

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})