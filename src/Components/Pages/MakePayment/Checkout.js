import React from "react";
import "./CheckOut.css";
import Address from "../../Utils/Address";
import Input from "../../Utils/Input";
import { Button } from "../../Utils/Button";
import { useStateValue } from "../../Context/UseContext";
const CheckOut = () => {
  const [{ Add_Date_Time_Details, Card_details, WayToMakePayment }, dispatch] =
    useStateValue();
  console.log(Add_Date_Time_Details, Card_details);
  const handleAddForm = () => {
    document.querySelector(".add_details_form").style.display = "flex";
  };
  const handleAddFormClose = () => {
    document.querySelector(".add_details_form").style.display = "none";
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
                  />
                </div>
              </div>
              {/* total */}
              <div className="check_out_total_box">
                <div className="order_summery_heading">Order Summary</div>
                <div className="common_order_summary_filds">
                  <div>Items :</div>
                  <div> 29393</div>
                </div>
                <div className="common_order_summary_filds">
                  <div>GST :</div>
                  <div> 246</div>
                </div>
                <div className="common_order_summary_filds">
                  <div>Items :</div>
                  <div> 29393</div>
                </div>
                <div className="common_order_summary_filds">
                  <div>Promotion Applied :</div>
                  <div> -300</div>
                </div>
                <div className="Oder_summery_total">
                  <div>Order Total :</div>
                  <div> 29093</div>
                </div>
              </div>
            </div>
            <div className="checkout_review_box">
              {WayToMakePayment ? (
                <div key={WayToMakePayment.id} className="PlacesViewCard">
                  <div className="place-img">
                    <img src={WayToMakePayment.img} alt="hh" />
                  </div>
                  <div className="placesView-details-box">
                    <div className="placesView-placeName">
                      <h3 className="h3"></h3>
                    </div>
                    <div className="placeview-rating">
                      <div className="Placeview-rating-text">
                        <span className="rating-digit"></span>
                        <span> (315 ratings)</span>
                      </div>
                      <div className="placeview-rating-disc">Excellent</div>
                    </div>
                    <div className="placeview-price">
                      <div className="placeview-rupe">₹2222 /hr</div>
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
              ) : (
                <div style={{ color: "black", fontSize: "40px" }}>Nothing</div>
              )}
            </div>
          </div>
          <Addres_details onclickClose={handleAddFormClose} />
        </div>
      </div>
    </div>
  );
};
export default CheckOut;

const Addres_details = ({ onclickClose }) => {
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
                <Input className="address_form_name" />
              </label>
              <div className="common_class_form">
                <label>
                  Mobile number
                  <Input className="address_form_name" />
                </label>
                <label>
                  Area pincode
                  <Input className="address_form_name" />
                </label>
              </div>

              <label>
                Flat, House no., Building, Company
                <Input className="address_form_name" />
              </label>
              <label>
                Area, Street, Sector, Village
                <Input className="address_form_name" />
              </label>
              <label>
                Landmark
                <Input className="address_form_name" />
              </label>
              <div className="common_class_form">
                <label>
                  Town/City
                  <Input className="address_form_name" />
                </label>
                <label>
                  State
                  <Input className="address_form_name" />
                </label>
              </div>

              <Button
                btn_name="Use this address"
                className="adderss_form_add_btn"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
