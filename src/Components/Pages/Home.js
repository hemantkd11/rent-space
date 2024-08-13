import React, { useEffect, useState } from "react";
import Image1 from "../../Image/partyPlace1.jpg";
import Image2 from "../../Image/personalplace1.jpg";
import Image3 from "../../Image/officeplace1.webp";
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
    <div className="home-page" style={{ backgroundImage: images[bgImage] }}>
      <div className="l">
        {/* Page content */}
        <h1 className="text-center text-white mt-20">Welcome to Home Page</h1>
      </div>
    </div>
  );
};

export default Home;
