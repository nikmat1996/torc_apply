import React, { useEffect, useRef, useState } from "react";
import "../styles/services.css";
import { FaLaptopCode, FaUserGraduate } from "react-icons/fa";
import { TbFileSignal } from "react-icons/tb";
import { GiSmartphone } from "react-icons/gi";
import { ImVideoCamera } from "react-icons/im";
import { AiOutlineBarChart } from "react-icons/ai";
import { useObserver } from "./observer";

const Services = () => {
  const [show, servicesRef] = useObserver();

  return (
    <section className="services_section">
      <div className="services_wrapper" ref={servicesRef}>
        <h6 className={"services_h6 " + (show ? "services_show" : '')}>What We Offer</h6>
        <h2 className={"services_h2 " + (show ? "services_show" : '')}>Innovation in Every Step</h2>
        <div className={"services_container one " + (show ? "services_show" : '')}>
          <figure>
            <div className="services_iconWrap">
              <TbFileSignal size={40} stroke="rgb(242, 2, 2)" />
            </div>
            <h3>Software Devolopment</h3>
          </figure>
          <figure>
            <div className="services_iconWrap">
              <FaLaptopCode size={40} fill="rgb(51, 255, 0)" />
            </div>
            <h3>Website Devolopment</h3>
          </figure>
          <figure>
            <div className="services_iconWrap">
              <GiSmartphone size={40} fill="rgb(18, 0, 253)" />
            </div>
            <h3>Application Devolopment</h3>
          </figure>
        </div>
        <div className={"services_container two " + (show ? "services_show" : '')}>
          <figure>
            <div className="services_iconWrap">
              <ImVideoCamera size={40} fill="rgb(193, 11, 255)" />
            </div>
            <h3>Media Production</h3>
          </figure>
          <figure>
            <div className="services_iconWrap">
              <AiOutlineBarChart size={40} fill="rgb(44, 0, 255)" />
            </div>
            <h3>Digital Marketing</h3>
          </figure>
          <figure>
            <div className="services_iconWrap">
              <FaUserGraduate size={40} fill="rgb(242, 148, 7)" />
            </div>
            <h3>Education</h3>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Services;
