import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, type }) => {
  //
  const background = rgb.join(",");
  const hexColor = rgbToHex(...rgb);
  const [alert, setAlert] = useState(false);
  
  // copy to clipboard
  const clipboardHandler = () => {
    const copy = navigator.clipboard.writeText(hexColor);
    setAlert(true);
    return copy;
  };

  // setTimeout
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
      console.log("timeout");
    }, 2000);

    return () => {
      console.log("cleanup");
      clearTimeout(timeout);
    };
  }, [alert]);

  return (
    <article
      onClick={clipboardHandler}
      className={`color ${type === 'shade' ? "color-light" : null}`}
      style={{ backgroundColor: `rgb(${background})` }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexColor}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
