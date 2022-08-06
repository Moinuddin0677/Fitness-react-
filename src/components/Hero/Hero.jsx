import React from "react";
import Header from "../Header/Header";
import "./Hero.css";

import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";

import { motion } from "framer-motion";

import NumberCounter from "number-counter";
import { Link } from "react-scroll";

const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;

  return (
    <div className="hero" id="home">
      <div className="blur blur-h"></div>
      <div className="left-h">
        <Header />

        {/* the best ad */}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "178px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>The best fitness club in the town</span>
        </div>

        {/* hero heading */}
        <div className="hero-text">
          <div>
            <span className="strock-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
              Here we will help you to shape and build your ideal body live up
              your life to fullest
            </span>
          </div>
        </div>

        {/* figures */}
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={140} start={100} delay="4" preFix="+" />
            </span>
            <span>export coachs</span>
          </div>
          <div>
            <span>
              <NumberCounter end={975} start={500} delay="3" preFix="+" />
            </span>
            <span>members joined</span>
          </div>
          <div>
            <span>
              <NumberCounter end={50} start={0} delay="3" preFix="+" />
            </span>
            <span>fitness Program</span>
          </div>
        </div>

        {/* Hero buttons */}
        <div className="hero-buttons">
          <buttons className="btn">
            <Link to="plans" span={true} smooth={true}>
              Get Started
            </Link>
          </buttons>
          <buttons className="btn">
            <Link to="Programs">Learn More</Link>
          </buttons>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">
          <Link to="join-us" span={true} smooth={true}>
            Join now
          </Link>
        </button>

        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={{ transition }}
          className="heart-rate"
        >
          <img src={Heart} alt="Loding" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>

        {/* hero image */}
        <img src={hero_image} alt="Loding" className="hero-image" />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={{ transition }}
          src={hero_image_back}
          alt="Loding"
          className="hero-image-back"
        />
        {/* calories */}

        <motion.div
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={{ transition }}
          className="calories"
        >
          <img src={Calories} alt="Loding" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default Hero;
