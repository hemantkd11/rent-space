import React from "react";
import SlotBox from "./SlotDateTime";
import { Banner } from "../../Utils/Banner";
import Mobile from "../../../Image/cashback_offer_2400.png";
import { Button } from "../../Utils/Button";
const Places = () => {
  return (
    <div className=" App-page-container ">
      <div className=" App-page-Inner-container">
        <div className="App-page-wrapper ">
          <SlotBox SlotHeader="Hello" />
          <Banner
            className1="Banner-container"
            className2="banner-wrapper"
            className3="banner-right-side"
          >
            <div className="left-banner-text">
              <div className="left-banner-part1">
                The fastive of weekends <br />
                is here!
              </div>
              <div className="left-banner-part2">
                <Button className="banner-btn" btn_name="Book Now" />
              </div>
            </div>
            <div className="Banner-offer-img">
              <img src={Mobile} alt="offer" />
            </div>
          </Banner>
          <Banner className1="Banner2-wrapper" className2="Banner2-box">
            <div className="banner2-text">
              Get ready for a <br />
              Unlimate fun
            </div>

            <div className="banner2-offer-box">Flat 30% off </div>
            <div className="banner2-book-btn">
              <Button btn_name="Book Now" className="banner-btn" />
            </div>
          </Banner>
        </div>
      </div>
    </div>
  );
};
export default Places;
