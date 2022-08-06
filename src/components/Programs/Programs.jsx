import React from "react";
import "./Programs.css";
import { programsData } from "../../data/programsData";
import RightArrow from "../../assets/rightArrow.png";
import { Link } from "react-scroll";

const Programs = () => {
  return (
    <div className="Programs" id="programs">
      {/* header */}
      <div className="Programs-header">
        <span className="strock-text">Explore our</span>
        <span>Programs</span>
        <span className="strock-text">to shape you</span>
      </div>

      <div className="Program-categories">
        {programsData.map((program) => (
          <Link to="join-us" span={true} smooth={true}>
            <div className="Category">
              {program.image}
              <span>{program.heading}</span>
              <span>{program.details}</span>
              <div className="join-now">
                <span>Join Now</span>
                <img src={RightArrow} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Programs;
