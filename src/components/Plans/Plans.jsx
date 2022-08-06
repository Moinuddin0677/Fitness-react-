import React from "react";
import "./Plans.css";
import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";
import { Link } from "react-scroll";

const Plans = () => {
  return (
    <div className="plans-container" id="plans">
      <div className="blur blur1-p"></div>
      <div className="blur blur2-p"></div>
      <div className="Programs-header">
        <span className="strock-text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="strock-text">NOW WITHUS</span>
      </div>

      {/* plans data */}
      <div className="plans">
        {plansData.map((plan, i) => (
          <div className="plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>&#x20B9;{plan.price}</span>

            <div className="features">
              {plan.features.map((feature, i) => (
                <div className="feature">
                  <img src={whiteTick} alt="" />
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>

            <div>
              <span>See more benifits</span>
            </div>
            <button className="btn">
              <Link to="join-us" span={true} smooth={true}>
                Join now
              </Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
