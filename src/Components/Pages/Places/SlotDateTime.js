import React, { useState } from "react";
import Input from "../../Utils/Input";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../../Context/UseContext";
const SlotBox = ({ SlotHeader }) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [dateTimeIn, setDateTimeIn] = useState("");
  const [dateTimeOut, setDateTimeOut] = useState("");
  const [{ Add_Date_Time_Details }, dispatch] = useStateValue();

  const DD = () => {
    const Add_Time = {
      dateTimeIn,
      dateTimeOut,
    };
    localStorage.clear();
    dispatch({
      type: "Add_Timing_Details",
      items: Add_Time,
    });
    localStorage.setItem("Add_Date_Time_Details", JSON.stringify(Add_Time));
  };
  const handleSearch = () => {
    // Navigate with search parameters

    if (search == "" && dateTimeIn == "" && dateTimeOut == "") {
      alert("pleace enter date and time **");
    } else {
      navigate("/placesView", {
        state: {
          search,
          dateTimeIn,
          dateTimeOut,
        },
      });
      DD();
    }
  };

  return (
    <div className="slot-input-box">
      <div className="slot-heading">{SlotHeader}</div>
      <div className="slot-input-search-date-time">
        <div className="slot-search-input-box">
          <Input
            type="search"
            className="slot-input-search"
            placeholder="Search Place"
            onchange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="slot-input-from-too">
          <div className="slot-input-from-too-wrapper">
            <div className="datefrom checkin-date-slot">
              Select date for checkin
              <Input
                className="slot-date-time-from"
                type="datetime-local"
                placeholder={
                  dateTimeIn === ""
                    ? "Please select a check-in date and time"
                    : "hhe"
                }
                onchange={(e) => setDateTimeIn(e.target.value)}
              />
            </div>
            <div className="datefrom checkout-date-slot ">
              Select date for checkout
              <Input
                className="slot-date-time-too"
                type="datetime-local"
                placeholder="select checkOut date and time"
                onchange={(e) => setDateTimeOut(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="search-date-time-submit-btn">
        <button className="slot-search-btn" onClick={handleSearch}>
          Search places
        </button>
      </div>
    </div>
  );
};

export default SlotBox;
