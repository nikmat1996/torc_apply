import React, { useEffect, useRef, useState } from "react";
import "../styles/numbers.css";
import { HiOutlineUsers } from "react-icons/hi";
import { FaUsers } from "react-icons/fa";
import { SlGlobe } from "react-icons/sl";
import { PiShootingStarBold } from "react-icons/pi";
import { useObserver } from "./observer";
import NumbersCard from "./NumbersCard";

const Numbers = () => {
    const [show, numberRef] = useObserver();
    
    const data = [{
        'p': 'Happy Clients',
        'num': 50,
        'span': '+',
        'icon': <HiOutlineUsers size={55} />
    },{
        'p': 'Teammates',
        'num': 20,
        'span': '+',
        'icon': <FaUsers size={55} />
    },{
        'p': 'Countries',
        'num': 8,
        'span': '',
        'icon': <SlGlobe size={55} />

    },{
        'p': 'Satisfaction',
        'num': 100,
        'span': '%',
        'icon': <PiShootingStarBold size={55} />
    }]

  return (
    <section className="numbers_section">
      <div
        className={"numbers_wrapper " + (show ? "numbers_wrapper_show" : "")}
        ref={numberRef}
      >
        <h2 className="numbers_heading">
          At Torc Infotech, our relentless aim is to innovate technology
          solutions that enhance
        </h2>
        <p className="numbers_para">
          Customer experiences and bring the world close to the mainstream
          adoption of digitalization and automation technology practices.
        </p>
        {data.map(item => <NumbersCard key={item.p} show={show} data={item} />)}
      </div>
    </section>
  );
};

export default Numbers;
