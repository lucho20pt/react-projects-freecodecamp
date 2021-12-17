import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  //

  const [index, setIndex] = useState(0);
  const { name, image, job, text } = people[index];
  // const max = people.length - 1;
  const checkNum = (number) => {
    if (number > people.length - 1) return 0;
    if (number < 0) return people.length - 1;
    return number;
  };

  // previous
  const prevPerson = () => {
    // index > 0 ? setIndex(index - 1) : setIndex(max);
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNum(newIndex);
    });
  };

  // next
  const nextPerson = () => {
    // index < max ? setIndex(index + 1) : setIndex(0);
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNum(newIndex);
    });
  };

  // random
  const randomPerson = () => {
    let randomNum = Math.floor(Math.random() * people.length);
    // if (index === randomNum && index > 0) setIndex(randomNum - 1);
    // else if (index === randomNum && index === 0) setIndex(randomNum + 1);
    // else setIndex(randomNum);
    if (randomNum === index) randomNum = index + 1;
    setIndex(checkNum(randomNum));
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
