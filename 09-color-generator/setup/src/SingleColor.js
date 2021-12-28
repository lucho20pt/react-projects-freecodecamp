import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ index, alpha, rgb, type, weight }) => {
  //
  const background = rgb.join(",");
  const hexColor = rgbToHex(...rgb);
  const [alert, setAlert] = useState(false);

  const clipboardHandler = () => {
    const copy = navigator.clipboard.writeText(hexColor);
    setAlert(true);
    return copy;
  };

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
      className={`color ${index > 10 ? "color-light" : null}`}
      style={{ backgroundColor: `rgb(${background})` }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexColor}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
