import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import "./Header.css";

import { Link } from "react-scroll";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className="header">
      <img src={Logo} alt="Sorry" className="logo" />
      {menuOpened === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
          onClick={() => setMenuOpened(true)}
        >
          <img
            src={Bars}
            alt=""
            style={{ width: "1.5rem", height: "1.1rem" }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <Link
              activeClass="active"
              to="hero"
              onClick={() => setMenuOpened(false)}
              span={true}
              smooth={true}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="programs"
              onClick={() => setMenuOpened(false)}
              span={true}
              smooth={true}
            >
              Program
            </Link>
          </li>
          <li onClick={() => setMenuOpened(false)}>
            <Link
              to="reasons"
              onClick={() => setMenuOpened(false)}
              span={true}
              smooth={true}
            >
              Why us
            </Link>
          </li>
          <li onClick={() => setMenuOpened(false)}>
            <Link
              to="plans"
              onClick={() => setMenuOpened(false)}
              span={true}
              smooth={true}
            >
              Plans
            </Link>
          </li>
          <li>
            <Link
              to="testimonial"
              onClick={() => setMenuOpened(false)}
              spy={true}
              smooth={true}
            >
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
