import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  //
  const [color, setColor] = useState("#f15025");
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  // submit handler
  const submitHandler = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
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
          // console.log(color)
          return <SingleColor key={index} {...color} index={index} />;
        })}
      </section>
    </>
  );
}

export default App;
