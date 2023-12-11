import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import TestimonialCard from "../TestimonialCard";
import "./Slider.css";

const Slider = () => {
  const clientData = [
    {
      name: "Jack F",
      designation: "Ex Blackrock PM",
      testimonial:
        "Love how Loch integrates portfolio analytics and whale watching into one unified app.",
    },
    {
      name: "Yash P",
      designation: "Research, 3poch Crypto Hedge Fund",
      testimonial:
        "I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!",
    },
    {
      name: "Shiv S",
      designation: "Co-Founder Magik Labs",
      testimonial:
        "Managing my own portfolio is helpful and well designed. What’s really interesting is watching the whales though. No one else has made whale tracking so simple.",
    },
  ];
  const [width, setWidth] = useState(0);
  const dragSlider = useRef();

  useEffect(() => {
    if (dragSlider.current)
      setWidth(dragSlider.current.scrollWidth - dragSlider.current.offsetWidth);
  }, []);
  const handleScroll = (direction) => {
    const { current } = dragSlider;
    const scrollAmount = window.innerWidth > 1800 ? 270 : 210;
    direction === "left"
      ? (current.scrollLeft -= scrollAmount)
      : (current.scrollLeft += scrollAmount);
  };
  return (
    <div className='slider'>
      <motion.div
        className='slider_box_items'
        ref={dragSlider}
        whileTap={{ cursor: "grabbing" }}>
        <motion.div
          className='slider_box_item'
          ref={dragSlider}
          drag='x'
          dragConstraints={{
            right: 0,
            left: -width,
          }}>
          {clientData.map((card) => (
            <TestimonialCard key={card.name} {...card} />
          ))}
        </motion.div>
      </motion.div>
      <div
        className='icon icon-left'
        onClick={() => {
          handleScroll("left");
        }}>
        <img src='assets/caret-left.svg' alt='caret-left' />
      </div>
      <div
        className='icon icon-right'
        onClick={() => {
          handleScroll("right");
        }}>
        <img src='assets/caret-right.svg' alt='caret-right' />
      </div>
    </div>
  );
};

export default Slider;
