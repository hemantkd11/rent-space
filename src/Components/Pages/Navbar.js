import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import MenuIcon from "@mui/icons-material/Menu";
import "./navstyle.css";
import { Link } from "react-router-dom";
const Logo = () => (
  <>
    <span className="span-onspace">
      <i>O</i>n{/* <i>F</i>un */}
    </span>
    -<i>S</i>pace
  </>
);
const Hidesidebar = () => {
  const Hidesidebar = document.querySelector(".side-nav-bar");
  Hidesidebar.style.display = "none";
};
const showsidebar = () => {
  const showsidebar = document.querySelector(".side-nav-bar");
  showsidebar.style.display = "flex";
};
const Menu = () => (
  <div onClick={() => showsidebar()}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="#5f6368"
    >
      <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
    </svg>
  </div>
);

const ClodeMenu = () => {
  return (
    <div onClick={() => Hidesidebar()}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#5f6368"
      >
        <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
      </svg>
    </div>
  );
};
const NavlistScreen1000 = [
  { name: <Logo />, className: "logo", id: 1, link: "/Home" },

  {
    name: "Home",
    className: "hideonMobile",
    link: "/Home",
    id: 2,
  },
  {
    name: "Place",
    className: "hideonMobile",
    link: "/Places",
    id: 3,
  },
  {
    name: "Contact",
    className: "hideonMobile",
    link: "/#",
    id: 4,
  },
  {
    name: "CheckOut",
    className: "hideonMobile",
    link: "/checkout",
    id: 5,
  },
  {
    name: "PlaceView",
    className: "hideonMobile",
    link: "/PlacesView",
    id: 6,
  },

  {
    name: <Menu />,
    className: "hideonlaptop",
    link: "/#",
    id: 5,
  },
];

const Mobileview = [
  {
    name: <ClodeMenu />,
    // className: "Menu-btn",
    link: "/Home",
    id: 5,
  },

  {
    name: "Home",
    // className: "nav-home",
    link: "/#",
    id: 2,
  },
  {
    name: "Place",
    // className: "nav-places",
    link: "/Places",
    id: 3,
  },
  {
    name: "Contact",
    // className: "nav-contact",
    link: "/#",
    id: 4,
  },
  {
    name: "PlacesView",
    // className: "nav-contact",
    link: "/PlacesView",
    id: 4,
  },
];
const Navbar = () => {
  return (
    <div className="Nav-container">
      <div className="Nav-limit-container">
        <nav className="Nav-wrapper">
          <ul className="nav-list">
            {NavlistScreen1000 ? (
              NavlistScreen1000.map((item) => (
                <li key={item.id} className={item.className}>
                  <Link key={item.id} to={item.link}>
                    {item.name}
                  </Link>
                </li>
              ))
            ) : (
              <p>nothing</p>
            )}
          </ul>
          <ul className="side-nav-bar">
            {Mobileview ? (
              Mobileview.map((item) => (
                <li key={item.id}>
                  <a key={item.id} href={item.link}>
                    {item.name}
                  </a>
                </li>
              ))
            ) : (
              <p>nothing</p>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
