import React, { useContext, useEffect, useState } from "react";
import "../styles/bookingDetails.css";
import { seats } from "../data";
import Loader from "../Components/loader"
import BsContext from "../Context/BsContext";

const LastBookingData = (props) => {
  const [lastBooking, setLastBooking] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("");
  const context = useContext(BsContext);
  const { lastBookingDatas } = context;

  const getLastRecord = async () => {
    try {
      setLoader(true);
      setError("");
      const res = await fetch("http://localhost:8081/api/booking", {
        method: "GET",
      });
      const data = await res.json();
      if (res.ok && data.data) {
        setLastBooking(data.data);
      } else if (res.ok && !data.data) {
        setLastBooking(null);
      } else {
        setError(data.message || "Failed to fetch last booking.");
        setLastBooking(null);
      }
      setLoader(false);
    } catch (error) {
      setError("Could not fetch last booking. Please try again later.");
      setLastBooking(null);
      setLoader(false);
    }
  };

  useEffect(() => {
    getLastRecord(); // Fetch last booking on mount and when context changes
  }, [lastBookingDatas]);

  return (
    <div className="last_booking_details_container_main">
      <h2 className="last_booking_details_header">Last Booking Details:</h2>
      <button className="refresh-btn" onClick={getLastRecord} style={{marginBottom: '10px'}}>Refresh</button>
      {loader ? (
        <Loader />
      ) : error ? (
        <p className="error_msg">{error}</p>
      ) : lastBooking ? (
        <div>
          <div className="seats_container">
            <p className="seats_header">Seats:</p>
            <ul className="seats">
              {seats.map((seat, index) => (
                <li className="seat_value" key={index}>
                  {seat}: {Number(lastBooking?.seats[seat] || 0)}
                </li>
              ))}
            </ul>
          </div>
          <p className="slot" style={{ textAlign: "left" }}>
            Slot: <span>{lastBooking?.slot}</span>
          </p>
          <p className="movie">
            Movie: <span>{lastBooking?.movie}</span>
          </p>
          {lastBooking?.createdAt && (
            <p className="timestamp">Booked at: <span>{new Date(lastBooking.createdAt).toLocaleString()}</span></p>
          )}
        </div>
      ) : (
        <p className="no_previous_booking_msg">No Previous Booking Found!</p>
      )}
    </div>
  );
};

export default LastBookingData;
