import React, { useEffect, useState } from "react";
import "./scroll.css";
// import IconButton from "@material-ui/IconButton";
// import { makeStyles } from "@material-ui/core/styles";
// import ExpandLess from "@material-ui/icons/ExpandLess";
// import Button from "@mui/material/Button";

const Scroll = ({ showBelow }) => {
  const [show, setShow] = useState(showBelow ? false : true);

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true);
    } else {
      if (show) setShow(false);
    }
  };

  useEffect(() => {
    if (showBelow) {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  });

  const handleClink = () => {
    window["scrollTo"]({ top: 0, behavior: "smooth" });
  };
  return (
    <div>
      <button onClick={handleClink} className="btn-s">
        ^
      </button>
    </div>
  );
};

export default Scroll;
