import React from "react";
import "./Whales.css";
import "../App.css";
const Whales = () => {
  return (
    <section className='whales'>
      <div className='portfolio-img'>
        <img
          src='assets/cohorts.png'
          alt='portfolio'
          className='img-responsive'
        />
      </div>
      <div className='whale-right flex-col-content'>
        <div className='content-icon'>
          <img src='assets/eye.svg' alt='eye-icon' className='img-responsive' />
        </div>
        <h3>Watch what the whales are doing</h3>
        <p>
          All whales are not equal. Know exactly what the whales impacting YOUR
          portfolio are doing
        </p>
      </div>
    </section>
  );
};

export default Whales;
