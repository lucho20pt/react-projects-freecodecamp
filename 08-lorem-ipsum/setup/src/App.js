import React, { useState } from "react";
import data from "./data";

function App() {
  //
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  // submit
  const submitCountHandler = (event) => {
    event.preventDefault();
    let amount = parseInt(count);
    let max = data.length;

    if (amount < 1) amount = 1;
    if (amount > max) amount = max;

    setText(data.slice(0, amount));
  };

  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={submitCountHandler}>
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          min="1"
          max={data.length}
          value={count}
          onChange={(event) => {
            setCount(event.target.value);
          }}
        />
        <button className="btn" type="submit">
          generate
        </button>
      </form>
      {text.map((item, index) => {
        return (
          <article className="lorem-text" key={index}>
            <p>{item}</p>
          </article>
        );
      })}
    </section>
  );
}

export default App;
