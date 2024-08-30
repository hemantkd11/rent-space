import React from "react";
import { Button } from "../Utils/Button";
import { useStateValue } from "../Context/UseContext";

const SaveList = () => {
  const [{ Card_details }, dispatch] = useStateValue();
  console.log("saveitem.js", Card_details);
  return (
    <div className=" App-page-container ">
      <div className="checkout_heading">Saved Item for later</div>
      {Array.isArray(Card_details) ? (
        Card_details.map((items) => (
          <div key={items.id} className=" App-page-Inner-container">
            <div className="App-page-wrapper">
              <div className="PlacesViewCard">
                <div className="place-img">
                  <img src={items.img} alt="" />
                </div>
                <div className="placesView-details-box">
                  <div className="placesView-placeName">
                    <h3 className="h3">place name</h3>
                  </div>
                  <div className="placeview-rating">
                    <div className="Placeview-rating-text">
                      <span className="rating-digit">*</span>
                      <span> (315 rating)</span>
                    </div>
                    <div className="placeview-rating-disc">Excellent</div>
                  </div>
                  <div className="placeview-price">
                    <div className="placeview-rupe">₹ 3342/hr</div>
                    <div className="placeview-btns">
                      <Button className="common-btn" btn_name="View Details" />
                      <Button
                        className="common-btn placesView-BookNow"
                        btn_name="Book Now"
                      />
                      <Button
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
            </div>
          </div>
        ))
      ) : (
        <div>Nothing to Display</div>
      )}
    </div>
  );
};

export default SaveList;
