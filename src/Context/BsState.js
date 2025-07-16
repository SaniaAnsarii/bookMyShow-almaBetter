import React, { useState, useEffect } from "react";
import BsContext from "./BsContext";

const BsState = (props) => {
  const [time, changeTime] = useState("");               
  const [movie, changeMovie] = useState("");            
  const [lastBookingDatas, setLastBookingData] = useState(null); 
  const [noOfSeat, changeNoOfSeats] = useState({
    A1: 0,
    A2: 0,
    A3: 0,
    A4: 0,
    D1: 0,
    D2: 0,
  });  

  const handlePostBooking = async () => {
 
    try {
        
        const res = await fetch(
          `${process.env.REACT_APP_BASE_URL}/api/booking`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ movie: movie, slot: time, seats: noOfSeat }),
          }
        );
        const data = await res.json();
        if (res.status === 200) {
        
          changeTime("");
          changeMovie("");
          changeNoOfSeats({
            A1: 0,
            A2: 0,
            A3: 0,
            A4: 0,
            D1: 0,
            D2: 0,
          });
          setLastBookingData(data.data);
          window.localStorage.clear();
        }
        
    } catch (error) {
        console.log("error", error);
        return false
    }
  };

  useEffect(() => {
    const movie = window.localStorage.getItem("movie");
    const slot = window.localStorage.getItem("slot");
    const seats = JSON.parse(window.localStorage.getItem("seats"));

    if(movie || slot || seats){
      changeMovie(movie);
      changeTime(slot);
      changeNoOfSeats(seats);
    }

  }, []);

  return (
    <BsContext.Provider 
      value={{
        handlePostBooking,
        movie,
        changeMovie,
        time,
        changeTime,
        noOfSeat,
        changeNoOfSeats,
        lastBookingDatas,
      }}>
      {props.children}
    </BsContext.Provider>
  );
};

export default BsState;
