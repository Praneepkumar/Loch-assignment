import React from "react";
import "./Banner.css";
import Notifications from "./Notifications";
import Whales from "./Whales";
import Testimonials from "./Testimonials";
const Banner = () => {
  return (
    <div className='banner'>
      <div className='backdrop'>
        <Notifications />
        <Whales />
        <Testimonials />
      </div>
    </div>
  );
};

export default Banner;
