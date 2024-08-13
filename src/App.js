import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Pages/Navbar";
import DemoNavbar from "./Components/Pages/DemoNavbar";
import Home from "./Components/Pages/Home";

function App() {
  return (
    // <Router>
    //   <Routes></Routes>
    // </Router>
    <>
      <Navbar />
      <Home />
    </>
  );
}

export default App;
