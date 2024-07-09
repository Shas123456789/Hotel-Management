import React, { useEffect, useState } from "react";
import axios from "axios";
import Room from "../components/Room";
import Loader from "../components/Loader";


import Error from "../components/Error";
import { DatePicker, Space } from 'antd';
const { RangePicker } = DatePicker;

function Homescreen() {
  const [rooms, setRooms] = useState([]);
  const [loading, setloading] = useState();
  const [error, seterror] = useState();

  const[fromdate,setfromdate] = useState();
  const[todate,settodate] = useState();
  // Fetch data from the server

  useEffect(() => {
    async function fetchData() {
      try {
        setloading(true);
        const { data } = await axios.get("/api/rooms/getallrooms");
        setRooms(data);
        setloading(false);
      } catch (error) {
        seterror(true);
        console.error(error);
        setloading(false);
      }
    }

    fetchData();
  }, []);

  // function filterByDate(dates){
  //   if (dates) {
  //     console.log("Selected Dates:", dates);
      
  //     console.log(moment(dates[0]).format("DD-MM-YYYY"));
  //     console.log(moment(dates[1]).format("DD-MM-YYYY"));
  //     setfromdate(moment(dates[0]).format("DD-MM-YYYY"))
  //     settodate(moment(dates[1]).format("DD-MM-YYYY"))

  // }
  // }
  function filterByDate(dates) {
    if (dates && dates.length === 2) {
      const [start, end] = dates;
      const formattedStartDate = start.format("DD-MM-YYYY");
      const formattedEndDate = end.format("DD-MM-YYYY");
      console.log("Selected Dates:", formattedStartDate, formattedEndDate);
      setfromdate(formattedStartDate);
      settodate(formattedEndDate);
    } else {
      console.log("No dates selected");
      alert("Please select a date range.");
    }
  }
  
  

  return (
    <div className="container">
      <h2>Welcome to our Hotel!</h2>
      
      <div className="row">
      
      <div className="col-md-3">
      <RangePicker format="DD-MM-YYYY" onChange={filterByDate} />

      </div>
      </div>
      <div className="row justify-content-center mt-5">
        {loading ? (
          <h1><Loader/></h1>
        ) : rooms.length > 1 ?(
            rooms.map((room) => {
              return <div className="com-md-9 mt-3">
                  <Room room={room} fromdate={fromdate} todate={todate}/>
              </div>
            })
          ):(
            <Error/>
          
        )}
      </div>
    </div>
  );
}

export default Homescreen;
