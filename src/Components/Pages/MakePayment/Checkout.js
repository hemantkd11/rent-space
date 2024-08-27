import React from "react";

const CheckOut = () => {
  return (
    <div className=" App-page-container ">
      <div className=" App-page-Inner-container">
        <div className="App-page-wrapper ">
          <div
            className="checkout-title"
            style={{
              width: "100%",
              backgroundColor: "red",
              height: "100vh",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div>dilevary adress</div>
              <div>item review</div>
            </div>
            <div>other total</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CheckOut;
