export const initialState = {
  Booking_Details: JSON.parse(localStorage.getItem("Booking_Details")) || [],
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
      console.log("Add_Date_Time_Details", action.items);
      //   const Booking_Timing = [...state.Add_Date_Time_Details, action.items];
      const Booking_Timing = action.items;
      localStorage.setItem(
        "Add_Date_Time_Details",
        JSON.stringify(Booking_Timing)
      );
      return {
        ...state,
        Add_Date_Time_Details: Booking_Timing,
      };
  }
};
