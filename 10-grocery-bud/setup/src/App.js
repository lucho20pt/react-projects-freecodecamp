import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  return (
    <section className="section-center">
      <form className="grocery-form">
        <Alert />
        <h3>grocery bud</h3>
        <div className="form-control">
          <input type="text" className="grocery" placeholder="e.g. eggs" />
          <button type="submit" className="submit-btn">
            submit
          </button>
        </div>
      </form>

      <div className="grocery-container">
        <List />
        <button className="clear-btn">clear items</button>
      </div>
    </section>
  );
}

export default App;
