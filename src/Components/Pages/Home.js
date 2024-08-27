import React, { useEffect, useState } from "react";
import Image1 from "../../Image/on_space_place1.jpg";
import Image2 from "../../Image/personalplace1.jpg";
import Image3 from "../../Image/place4.webp";
const Home = () => {
  const [bgImage, setBgImage] = useState(0);
  const images = [`url(${Image1})`, `url(${Image2})`, `url(${Image3})`];
  useEffect(() => {
    const interval = setInterval(() => {
      setBgImage((prev) => (prev + 1) % images.length);
    }, 4000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className="App-page-container  home-css"
      style={{ backgroundImage: images[bgImage] }}
    >
      <div className="App-page-Inner-container home-css-inner">
        <div className="App-page-wrapper home-css-wrapper">
          <div className="Home-page-heading">
            <span>Versatile spaces for unforgettable</span> parties, productive
            meetings, and cozy gatherings!
            <br />
            <br />
            <button className="home-page-btn">Begin Your Journey</button>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
