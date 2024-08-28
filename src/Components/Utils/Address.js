import React from "react";
// import Input from "./Input";

const Address = ({
  name,

  add_class1,
  add_class2,
  add_heading,
  add_details_class,
  add_name,
  add_home,
  add_loc,
  add_state,
  add_new_address_btn,
  add_new_change_btns,
  add_change_address,
  onClick_change_add,
  onClick_add_new_address,
  flat,
  Area,
  town,
}) => {
  return (
    <div className={add_class1}>
      <div className="add_form_heading_and_btns">
        <div className={add_heading}>Delivery address</div>
        <div className={add_new_change_btns}>
          <div
            className={add_new_address_btn}
            onClick={onClick_add_new_address}
          >
            Add Address
          </div>
          <div className={add_change_address} onClick={onClick_change_add}>
            Change
          </div>
        </div>
      </div>

      <div className={add_class2}>
        <div className={add_details_class}>
          <p className={add_name}>{name ? name : "Hemant Kumar Diwakar"}</p>
          <p className={add_home}>{flat ? flat : "100 Kritsal Rubi"} </p>
          <p className={add_loc}>{Area ? Area : "HAL Main road"}</p>
          <p className={add_state}>
            {town ? town : "Bengaluru, Karnataka 560101"}Bengaluru, Karnataka
            560101
          </p>
        </div>
      </div>
    </div>
  );
};
export default Address;
