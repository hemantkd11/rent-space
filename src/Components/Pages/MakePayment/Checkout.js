import React, { useState } from "react";
import "./CheckOut.css";
import Address from "../../Utils/Address";
import Input from "../../Utils/Input";
import { Button } from "../../Utils/Button";
import { useStateValue } from "../../Context/UseContext";
import { HelpCom } from "../../Utils/Helpcom";
import { useNavigate } from "react-router-dom";
const CheckOut = () => {
  const Navigate = useNavigate();
  const [addressDetails, setAddressDetails] = useState({
    Name: "",
    Flat: "",
    Area: "",
    Town: "",
    Phone: "",
    AreaPincode: "",
    State: "",
    Landmark: "",
  });
  console.log(addressDetails);
  const handleAddFormClose = () => {
    document.querySelector(".add_details_form").style.display = "none";
  };

  const handleFormdetails = (newAddress) => {
    // Update the address details state
    setAddressDetails(newAddress);
    console.log(newAddress);
    localStorage.setItem("addressDetails", JSON.stringify(newAddress));

    handleAddFormClose();
  };

  const saveAddress = JSON.parse(localStorage.getItem("addressDetails")) || {
    Name: "Hello Welcome",
    Area: "",
    Flat: "",
    Town: "",
    State: "",
    AreaPincode: "",
  };

  const [{ Add_Date_Time_Details, Card_details, WayToMakePayment }, dispatch] =
    useStateValue();
  console.log("WayToMakePayment", WayToMakePayment);

  const handleAddForm = () => {
    document.querySelector(".add_details_form").style.display = "flex";
  };

  const HandleConfirmBooking = (
    dateTimeIn,
    dateTimeOut,
    img,
    place,
    rating,
    totalAmount
  ) => {
    let bookingIdCounter = Math.floor(Math.random() * 1000);
    const newBookingId = `booking-${Date.now()}-${bookingIdCounter}`;

    // Your logic to handle the booking confirmation
    console.log("Booking Confirmed with ID:", newBookingId);
    const Add_Time = {
      dateTimeIn,
      dateTimeOut,
      img,
      place,
      rating,
      totalAmount,
      newBookingId,
    };

    dispatch({
      type: "My_Booking_page",
      items: Add_Time,
    });
    Navigate("/mybookings");
  };

  return (
    <div className=" App-page-container ">
      <div className=" App-page-Inner-container">
        <div className="App-page-wrapper ">
          <div className="check-out-main-wrapper">
            <div className="checkout_heading">Checkout</div>
            <div className="check_out_content_box">
              <div className="address_and_item_review">
                {/* delivery */}
                <div className="checkout_delivery_Add_box">
                  <Address
                    add_class1="add_main_box"
                    add_heading="heading_line"
                    add_class2="add_details_box_and_btn"
                    add_new_change_btns="address_btns"
                    add_details_class="add_details_class"
                    add_new_address_btn="add_address_btn"
                    add_change_address="add_change_btn add_address_btn"
                    onClick_add_new_address={handleAddForm}
                    name={saveAddress.Name}
                    area={saveAddress.Area || ""}
                    flat={saveAddress.Flat || ""}
                    town={
                      saveAddress.Town
                        ? `${saveAddress.Town}, ${saveAddress.State}, ${saveAddress.AreaPincode}`
                        : "Bengaluru, Karnataka 560101"
                    }
                  />
                </div>
              </div>
              {/* total */}
              <div className="check_out_total_box">
                <div className="order_summery_heading">Order Summary</div>
                <div className="common_order_summary_filds">
                  <div className="price-cut">Items :</div>
                  <div> {WayToMakePayment.totalAmount}</div>
                </div>
                <div className="common_order_summary_filds">
                  <div className="price-cut">GST :</div>
                  <div> 246</div>
                </div>
                <div className="common_order_summary_filds">
                  <div className="price-cut">Items :</div>
                  <div> </div>
                </div>
                <div className="common_order_summary_filds">
                  <div className="price-cut">Promotion Applied :</div>
                  <div> -1500 </div>
                </div>
                <div className="Oder_summery_total">
                  <div className="price-cut">Order Total :</div>
                  <div className="price-cut">
                    {" "}
                    {WayToMakePayment.totalAmount - 1500}
                  </div>
                </div>
                <div className="Oder_summery_total checkout_confirm_btn">
                  <Button
                    btn_name="Confirm Booking"
                    onClick={() =>
                      HandleConfirmBooking(
                        WayToMakePayment.dateTimeIn,
                        WayToMakePayment.dateTimeOut,
                        WayToMakePayment.img,
                        WayToMakePayment.place_name,
                        WayToMakePayment.rating,
                        WayToMakePayment.totalAmount - 1500
                      )
                    }
                  />
                </div>
              </div>
            </div>
            <div className="checkout_review_box">
              {WayToMakePayment ? (
                <div
                  key={WayToMakePayment.id}
                  className="PlacesViewCard checkout_placeCard"
                >
                  <div className="place-img">
                    <img src={WayToMakePayment.img} alt="hh" />
                  </div>
                  <div className="placesView-details-box">
                    <div className="placesView-placeName">
                      <h3 className="h3">{WayToMakePayment.place}</h3>
                    </div>
                    <div className="placeview-rating">
                      <div className="Placeview-rating-text">
                        <span className="rating-digit">
                          {WayToMakePayment.rating}
                        </span>
                        <span> (315 ratings)</span>
                      </div>
                      <div className="placeview-rating-disc">Excellent</div>
                    </div>
                    <div className="placeview-price">
                      <div className="placeview-rupe">
                        ₹{WayToMakePayment.totalAmount - 1500}
                      </div>
                      <div className="placeview-btns">
                        <Button
                          className="common-btn"
                          btn_name="View Details"
                        />
                        <Button
                          className="common-btn placesView-BookNow"
                          btn_name="Confirm Booking"
                          onClick={() =>
                            HandleConfirmBooking(
                              WayToMakePayment.dateTimeIn,
                              WayToMakePayment.dateTimeOut,
                              WayToMakePayment.img,
                              WayToMakePayment.place_name,
                              WayToMakePayment.rating,
                              WayToMakePayment.totalAmount - 1500
                            )
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div style={{ color: "black", fontSize: "40px" }}>
                  Please select your place first
                </div>
              )}
              <HelpCom />
            </div>
          </div>
          <Addres_details
            onclickClose={handleAddFormClose}
            onSubmit={handleFormdetails}
          />
        </div>
      </div>
    </div>
  );
};
export default CheckOut;

const Addres_details = ({ onclickClose, onSubmit }) => {
  const [formdetails, setFormdeatils] = useState({
    Name: "",
    Flat: "",
    Area: "",
    Town: "",
    Phone: "",
    AreaPincode: "",
    State: "",
    Landmark: "",
  });

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setFormdeatils((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    onSubmit(formdetails);
  };
  return (
    <div className="add_details_form">
      <div className="Address_wrapper">
        <div className="Address_main_box">
          <div className="form_heding_close_btn">
            <div className="form_heading ">Enter a new delivery adderss</div>
            <div onClick={onclickClose} className="close_btn">
              X
            </div>
          </div>
          <div>
            <div className="address_details_form_input">
              <label>
                Full name (First and Last name)
                <Input
                  name="Name"
                  className="address_form_name"
                  onchange={handleChanges}
                />
              </label>
              <div className="common_class_form">
                <label>
                  Mobile number
                  <Input
                    name="Phone"
                    className="address_form_name"
                    onchange={handleChanges}
                  />
                </label>
                <label>
                  Area pincode
                  <Input
                    name="AreaPincode"
                    className="address_form_name "
                    onchange={handleChanges}
                  />
                </label>
              </div>

              <label>
                Flat, House no., Building, Company
                <Input
                  name="Flat"
                  className="address_form_name"
                  onchange={handleChanges}
                />
              </label>
              <label>
                Area, Street, Sector, Village
                <Input
                  name="Area"
                  className="address_form_name"
                  onchange={handleChanges}
                />
              </label>
              <label>
                Landmark
                <Input
                  name="Landmark"
                  className="address_form_name"
                  onchange={handleChanges}
                />
              </label>
              <div className="common_class_form">
                <label>
                  Town/City
                  <Input
                    name="Town"
                    className="address_form_name"
                    onchange={handleChanges}
                  />
                </label>
                <label>
                  State
                  <Input
                    name="State"
                    className="address_form_name"
                    onchange={handleChanges}
                  />
                </label>
              </div>

              <Button
                btn_name="Use this address"
                className="adderss_form_add_btn"
                onClick={handleSubmit}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
