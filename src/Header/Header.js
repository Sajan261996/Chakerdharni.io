import React, { useState, useEffect } from "react";
import "./Header.css";
import logo from "C:/Users/Welcome/OneDrive/Desktop/app/todo-app/src/Images/Logoimage.jpeg";
import amazone from "../assets/amazone.jpg";
import flipkart from "../assets/flipkart.jpg";
import jiomart from "../assets/jiomart.jpg";
import meeso from "../assets/meeso.jpg";
import myntra from "../assets/myntra.jpg";
import Nykaa from "../assets/nykaa.jpg";
import AJIO from "../assets/ajio.jpg";
import lenskart from "../assets/lenskart.jpg";

const smallBoxes = [
  { img: amazone, link: "https://www.amazon.com" },
  { img: flipkart, link: "https://www.flipkart.com" },
  { img: jiomart, link: "https://www.jiomart.com" },
  { img: meeso, link: "https://www.meesho.com" },
  { img: myntra, link: "https://www.myntra.com" },
  { img: Nykaa, link: "https://www.nykaa.com" },
  { img: AJIO, link: "https://www.ajio.com" },
  { img: lenskart, link: "https://www.lenskart.com" },
];

const Header = () => {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade((prev) => !prev);
    }, 5000); // Every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <header className="header">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="circular-logo" />
          <span className={`logo-text ${fade ? "fade" : ""}`}>Chakerdharni</span>
        </div>

        <div className="small-boxes-container">
          {smallBoxes.map((box, idx) => (
            <a
              key={idx}
              href={box.link}
              target="_blank"
              rel="noopener noreferrer"
              className="small-box"
            >
              <img src={box.img} alt={`Box ${idx + 1}`} />
            </a>
          ))}
        </div>

        <button className="cta-button" onClick={() => alert("Sajan.kumar261996@gmail.com")}>
          Connect
        </button>
      </header>
    </>
  );
};

export default Header;
