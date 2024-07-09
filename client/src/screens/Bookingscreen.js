import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loader from '../components/Loader';
import Error from '../components/Error';
import moment from 'moment';

function Bookingscreen() {
  const { roomid, fromdate, todate} = useParams();
  const [room, setRoom] = useState(null); // Initialize room state to null
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Initialize error state to null

  const totaldays = moment(todate, "DD-MM-YYYY").diff(moment(fromdate, "DD-MM-YYYY"), 'days') + 1; // +1 to include both start and end date in the total 
  const[totalamount,settotalamount] = useState()



  useEffect(() => {
  const fetchRoomData = async () => {
  try {
    setLoading(true);
    const { data } = await axios.post("/api/rooms/getroombyid", { roomid }); // Send only the room ID
    setRoom(data);
    setLoading(false);
    settotalamount(data.rentperday*totaldays)
  } catch (error) {
    console.error("Error fetching room data:", error);
    setLoading(false);
    setError(error.response?.data?.message || "An error occurred while fetching room data.");
  }
};


    fetchRoomData();
  }, [roomid]); // Include roomid in the dependency array


  async function bookRoom() {
    let userid;

    try {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        userid = currentUser?._id;
    
        if (!userid) {
            throw new Error("User ID is missing");
        }
    } catch (error) {
        console.error("Error retrieving user ID from local storage:", error);
        // Handle error, e.g., redirect to login or show error message
        return; // Exit the function if user ID isn't available
    }
  
    const bookingDetails = {
      roomid : room._id,  // this might be a problem if 'room' is an object but 'roomid' is expected
      userid: JSON.parse(localStorage.getItem('currentUser'))._id,
      fromdate,
      todate,
      totaldays,
      totalamount: totaldays * room.rentperday  // Make sure this calculation is correct
    };
    
    
    try {
      const result = await axios.post('/api/bookings/bookRoom', bookingDetails);
      // Handle success (e.g., showing a success message or redirecting the user)
    }catch (error) {
      console.error("Failed to book room:", error);
      // Optionally, update the UI to show an error message
      setError(error.response?.data?.message || "Failed to book the room.");
    }
    
  }
  



  return (
    <div className=' m-5 bs'>
      {loading ? (<h1><Loader/></h1>) : room ? ( // Check if room is not null


        <div className='row justify-content-center m-2 bs'>
          <div className='row'>
            <div className='col-md-5'>
              <h1>{room.name}</h1> {/* Access room.name only when room is not null */}
              <img src={room.imageurls[0]} className='Bookimg'/>
            </div>
            <div className='col-md-5'>
              <div style={{textAlign:"right"}}>
              <h1>Booking Details</h1>
              <hr/>

              <b>
              <p>Name : {room.name}</p>
              <p>From Date :{fromdate}</p>
              <p>To Date :{todate}</p>
              <p>Max Count : {room.maxcount}</p>

              </b>
              </div>

              <div style={{textAlign:"right"}}>
              <b>
               <h1>Amount: </h1>
               <hr/>
               <p>Total Days: {totaldays}</p>
               <p>Rent Per Day: {room.rentperday}</p>
               <p>Total Amount: { room.rentperday ? (totaldays * room.rentperday): 'Calculating...'}</p>
               </b>
              </div>

              <div style={{float: "right"}}> 
               <button className='btn btn-primary' onClick={bookRoom}>Pay Now</button>
              </div>

            </div>
          </div>
        </div>
      ) : (<Error/>) }
    </div>
  );
}

export default Bookingscreen;
