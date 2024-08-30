import React, { useEffect, useState } from "react";
import SlotBox from "../Places/SlotDateTime";
import { DB } from "../../../Data/Db";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button } from "../../Utils/Button";
import { useStateValue } from "../../Context/UseContext";
export const PlacesView = () => {
  const Navigate = useNavigate();
  const [{ Add_Date_Time_Details, Card_details, WayToMakePayment }, dispatch] =
    useStateValue();
  if (!Add_Date_Time_Details) {
    console.error("Add_data_time is undefined");
  } else {
    console.log(Add_Date_Time_Details);
    console.log("Card_details", Card_details);
    console.log("WayToMakePayment", WayToMakePayment);
  }
  //   console.log("Add_Date_Time_Details", Add_Date_Time_Details);
  const location = useLocation();
  const [filterDb, setFilterDb] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 4;

  // Calculate the index range for the current page
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filterDb.slice(indexOfFirstCard, indexOfLastCard);

  // filter data
  const { search, dateTimeIn, dateTimeOut } = location.state || {};

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Determine total number of pages
  const totalPages = Math.ceil(filterDb.length / cardsPerPage);

  const HandleSaveItem = (id, img, place, rating, price, e) => {
    const Add_Time = {
      dateTimeIn,
      dateTimeOut,
      id,
      img,
      place,
      rating,
      price,
    };
    dispatch({
      type: "Place_Details",
      items: Add_Time,
    });
    localStorage.setItem(" Card_details", JSON.stringify(Add_Time));
    Navigate("/savedlist");
  };
  const HandleBooking = (id, img, place, rating, price) => {
    const Add_Time = {
      dateTimeIn,
      dateTimeOut,
      id,
      img,
      place,
      rating,
      price,
    };
    // localStorage.clear();
    dispatch({
      type: "WayToBook",
      items: Add_Time,
    });

    localStorage.setItem(" WayToMakePayment", JSON.stringify(Add_Time));
    Navigate("/checkout");
  };

  useEffect(() => {
    if (search) {
      const filterDataByArea = DB.flatMap((item) =>
        item.location
          .filter((loc) =>
            loc.area_name.toLowerCase().includes(search.toLowerCase())
          )
          .flatMap((loc) => loc.place)
      );
      setFilterDb(filterDataByArea);
    } else {
      setFilterDb([]);
    }
  }, [search]);
  console.log("filterDb0", filterDb);
  return (
    <div className=" App-page-container ">
      <div className=" App-page-Inner-container">
        <div className="App-page-wrapper ">
          <SlotBox />
          {currentCards ? (
            currentCards.map((item) => {
              return (
                <div key={item.id} className="PlacesViewCard">
                  <div className="place-img">
                    <img src={item.img_url} alt="" />
                  </div>
                  <div className="placesView-details-box">
                    <div className="placesView-placeName">
                      <h3 className="h3">{item.place_name}</h3>
                    </div>
                    <div className="placeview-rating">
                      <div className="Placeview-rating-text">
                        <span className="rating-digit">{item.rating} *</span>
                        <span> (315 ratings)</span>
                      </div>
                      <div className="placeview-rating-disc">Excellent</div>
                    </div>
                    <div className="placeview-price">
                      <div className="placeview-rupe">₹ {item.price}/hr</div>
                      <div className="placeview-btns">
                        <Button
                          className="common-btn"
                          btn_name="View Details"
                        />
                        <Button
                          onClick={() =>
                            HandleBooking(
                              item.id,
                              item.img_url,
                              item.place_name,
                              item.rating,
                              item.price
                            )
                          }
                          className="common-btn placesView-BookNow"
                          btn_name="Book Now"
                        />
                        <Button
                          onClick={() =>
                            HandleSaveItem(
                              item.id,
                              item.img_url,
                              item.place_name,
                              item.rating,
                              item.price
                            )
                          }
                          className="Save_Items_btn "
                          btn_name={
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 384 512"
                            >
                              <path d="M0 48C0 21.5 21.5 0 48 0l0 48 0 393.4 130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4 336 48 48 48 48 0 336 0c26.5 0 48 21.5 48 48l0 440c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488L0 48z" />
                            </svg>
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div>Nothing</div>
          )}
          <div className="pagination">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={currentPage === index + 1 ? "active" : ""}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
