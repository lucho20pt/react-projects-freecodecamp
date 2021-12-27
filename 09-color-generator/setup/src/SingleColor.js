import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ index, alpha, rgb, type, weight }) => {
  //
  const background = rgb.join(",");
  // console.log(bck);
  const hexColor = rgbToHex(...rgb);
  return (
    <article
      className={`color ${
        index > 10 ? "color-light" : null
      }`}
      style={{ backgroundColor: `rgb(${background})` }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexColor}</p>
    </article>
  );
};

export default SingleColor;
