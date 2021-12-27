import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  //
  
  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form>
          <input
            type="text"
          />
          <button className="btn" type="submit">
            submit
          </button>
        </form>
      </section>
      <section className="colors">colors</section>
    </>
  );
}

export default App;
