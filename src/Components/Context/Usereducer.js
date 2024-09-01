export const initialState = {
  Booking_Details: JSON.parse(localStorage.getItem("Booking_Details")) || [],
  Add_Date_Time_Details:
    JSON.parse(localStorage.getItem("Add_Date_Time_Details")) || null,
  Card_details: JSON.parse(localStorage.getItem("Card_details")) || [],
  WayToMakePayment: JSON.parse(localStorage.getItem("WayToMakePayment")) || [],
  My_Booking_details:
    JSON.parse(localStorage.getItem("My_Booking_details")) || [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "Add_Booking_Details":
      console.log("Add_Booking_Details", action.items);
      const Booking_detail = [...state.Booking_Details, action.items];
      localStorage.setItem("Booking_Details", JSON.stringify(Booking_detail));
      return {
        ...state,
        Booking_Details: Booking_detail,
      };
    case "Add_Timing_Details":
      const Booking_Timing = action.items;
      localStorage.setItem(
        "Add_Date_Time_Details",
        JSON.stringify(Booking_Timing)
      );
      return {
        ...state,
        Add_Date_Time_Details: Booking_Timing,
      };
    case "Place_Details":
      console.log("Card_details before update:", state.Card_details);
      const Details_Array = Array.isArray(state.Card_details)
        ? [...state.Card_details, action.items]
        : [action.items];
      console.log("Card_details after update:", Details_Array);
      localStorage.setItem("Card_details", JSON.stringify(Details_Array)); // Corrected key name
      return {
        ...state,
        Card_details: Details_Array,
      };
    case "WayToBook":
      const Make_Payment = action.items;
      localStorage.setItem("WayToMakePayment", JSON.stringify(Make_Payment));
      return {
        ...state,
        WayToMakePayment: Make_Payment,
      };
    case "My_Booking_page":
      const My_Booking = [...state.My_Booking_details, action.items];
      console.log("My_Booking_details", My_Booking);
      localStorage.setItem("My_Booking_details", JSON.stringify(My_Booking));
      return {
        ...state,
        My_Booking_details: My_Booking,
      };
    default:
      return state;
  }
};
