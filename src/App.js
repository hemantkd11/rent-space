// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Pages/Navbar";
// import DemoNavbar from "./Components/Pages/DemoNavbar";
import Home from "./Components/Pages/Home";
import Places from "./Components/Pages/Places/Places";
import { PlacesView } from "./Components/Pages/PlacesView/Placesview";
import { useStateValue } from "./Components/Context/UseContext";
import CheckOut from "./Components/Pages/MakePayment/Checkout";
import SaveList from "./Components/Pages/SaveList";

function App() {
  const [{ Add_Date_Time_Details, Card_details }] = useStateValue();
  console.log(Add_Date_Time_Details, Card_details);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/rent" element={<Home />} />
        <Route path="/Places" element={<Places />} />
        <Route path="/PlacesView" element={<PlacesView />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/savedlist" element={<SaveList />} />
      </Routes>
    </Router>
    // <>
    //   <Navbar />
    //   <Home />
    // </>
  );
}

export default App;
