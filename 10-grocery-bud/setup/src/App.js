import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  // states
  const [name, setName] = useState("");
  const [list, setList] = useState([{id:123, name: 'item 1'}]);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null)
  const [alert, setAlert] = useState({});

  // submit
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={onSubmitHandler}>
        <Alert />
        <h3>grocery bud</h3>
        <div className="form-control">
          <input type="text" className="grocery" placeholder="e.g. eggs" />
          <button type="submit" className="submit-btn">
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>

      <div className="grocery-container">
        <List items={list} />
        <button className="clear-btn">clear items</button>
      </div>
    </section>
  );
}

export default App;
