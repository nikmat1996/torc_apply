import React from "react";
import "../styles/contactUs.css";
// @ts-ignore
import bgImg from "../assets/contactUs.jpg";
import { useObserver } from "./observer";

const ContactUs = () => {
  const [show, contactUsRef] = useObserver();

  const BG_IMG_STYLE = {
    backgroundImage: `url(${bgImg})`,
  };

  return (
    <section className="contactUs--section">
      <div className="contactUs--backgroundImg" style={BG_IMG_STYLE}></div>
      <div className="contactUs--wrapper" ref={contactUsRef}>
        <h2>Enhancing experience with Enhanced Technology</h2>
        <button>Contact Us</button>
      </div>
    </section>
  );
};

export default ContactUs;
