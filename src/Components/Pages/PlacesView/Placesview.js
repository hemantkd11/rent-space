import React, { useEffect, useState } from "react";
import SlotBox from "../Places/SlotDateTime";
import { DB } from "../../../Data/Db";
import { useLocation } from "react-router-dom";
import { Button } from "../../Utils/Button";
import { useStateValue } from "../../Context/UseContext";
export const PlacesView = () => {
  //   const [{ Add_Date_Time_Details }] = useStateValue();
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
  console.log(filterDb);
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
                        <span> (315 rating)</span>
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
                          className="common-btn placesView-BookNow"
                          btn_name="Book Now"
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
