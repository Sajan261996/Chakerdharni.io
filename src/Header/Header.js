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
    }, 5000);

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

<<<<<<< HEAD
        <button className="cta-button" onClick={() => alert("Sajan.kumar261996@gmail.com")}>Connect</button>
=======
        <button className="cta-button" onClick={() => alert("Sajan.kumar261996@gmail.com")}>
          Connect
        </button>
            <div className="slider-container">
        <div className="slider">
          <p>
            Looking for a skilled web developer to bring your ideas to life? I specialize in custom websites, web applications, and responsive designs, ensuring a seamless user experience. Whether you need a business website, e-commerce store, or a custom web solution, I can help.
            📧 Contact me: Sajan.kumar261996@
          </p>
        </div>

>>>>>>> 7c122e5ac73ed2c5e14903a0234e9032e6430439
      </header>

      <div className="slider-container colorful">
        <div className="slider colorful-text">
          <marquee behavior="scroll" direction="left" scrollamount="6">
            <span style={{ color: "red", fontWeight: "bold" }}>🌟 Looking for a skilled web developer to bring your ideas to life? </span>
            <span style={{ color: "blue", fontWeight: "bold" }}>🌟 I specialize in custom websites, web applications, and responsive designs, ensuring a seamless user experience. </span>
            <span style={{ color: "green", fontWeight: "bold" }}>🎨 Whether you need a business website, e-commerce store, or a custom web solution, I can help. </span>
            <span style={{ color: "purple", fontWeight: "bold" }}>🚀📧 Contact me: Sajan.kumar261996@</span>
          </marquee>
        </div>
      </div>
    </>
  );
};

export default Header;
