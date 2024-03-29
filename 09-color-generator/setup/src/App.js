import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  //
  const amount = 20;
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  // const [list, setList] = useState([]);
  const [list, setList] = useState(new Values("#f15025").all(amount));

  // submit handler
  const submitHandler = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(amount);
      // console.log(colors);
      setList(colors);
      setError(false);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={submitHandler}>
          <input
            className={error ? "error" : null}
            type="text"
            placeholder="#f15025"
            value={color}
            onChange={(e) => {
              setColor(e.target.value);
            }}
          />
          <button className="btn" type="submit">
            submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          // console.log(color);
          return (
            <SingleColor key={index} {...color} index={index} amount={amount} />
          );
        })}
      </section>
    </>
  );
}

export default App;
