import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
const HeroSection = () => {
  return (
    <div>
      <main className="hero-section main">
        <div className="container grid grid-two-cols">
          <div className="hero-content">
            <h1 className="heading-xl">
              Expore the world,One country at a time.
            </h1>
            <p className="paragraph">
              Discover the history, culture, and beauty of every nation. Sort,
              search, and filter through countries to find the details you need.
            </p>
            <button className="btn btn-darken btn-inline bg-white-box">
              Start Exploring
              <FaLongArrowAltRight />
            </button>
          </div>
          <div className="hero-image">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/World_Flag_map.png/2560px-World_Flag_map.png"
              alt="world is beauty"
              className="banner-image"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default HeroSection;
