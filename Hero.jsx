import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* Left Side */}
        <div className="flexColCenter hero-left">
          <div className="hero-title">
            <div className="orange-circle"></div>
            <h1>
              Discover
              <br /> Most Suitable
              <br /> Property
            </h1>
          </div>
          <div className="flexColCenter hero-des">
            <span>Find a Variety of properties that suit you very easily</span>
            <span>Forget all difficulties in finding a residence for you</span>
          </div>
          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" placeholder="Enter a location" />
            <button className="button">Search</button>
          </div>

          {/* Stats Section */}
          <div className="flexCenter stats">
            <div className="stat-item">
              <h1>
                <CountUp end={9000} />+
              </h1>
              <p>Premium Products</p>
            </div>
            <div className="stat-item">
              <h1>
                <CountUp end={2000} />+
              </h1>
              <p>Happy Customers</p>
            </div>
            <div className="stat-item">
              <h1>
                <CountUp end={28} />+
              </h1>
              <p>Award Winning</p>
            </div>
          </div>
        </div>
        {/* Right Side */}
        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="./hero-image.png" alt="Hero" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
