import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";

function App() {
  //
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  // prev
  const prevHandler = () => {
    setIndex(index - 1);
  };
  // next
  const nextHandler = () => {
    setIndex(index + 1);
  };

  

  // main
  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className="section-center">
        {people.map((person, idx) => {
          const { id, image, name, quote, title } = person;

          let positon = "nextSlide";
          if (idx === index) positon = "activeSlide";
          if (idx === index - 1 || (index === 0 && idx === people.length - 1)) {
            positon = "lastSlide";
          }

          return (
            <article className={`${positon} |${idx}|`} key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}

        <button className="prev" onClick={prevHandler}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={nextHandler}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
