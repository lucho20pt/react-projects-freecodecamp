import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  // states
  const [name, setName] = useState("");
  const [list, setList] = useState([{ id: 123, title: "item 1" }, { id: 321, title: "item 2" }]);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: "message",
    type: "danger",
  });

  // submit
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={onSubmitHandler}>
        {alert.show && <Alert {...alert} />}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input type="text" className="grocery" placeholder="e.g. eggs" />
          <button type="submit" className="submit-btn">
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>

      <div className="grocery-container">
        { list && <List items={list} />}
        <button className="clear-btn">clear items</button>
      </div>
    </section>
  );
}

export default App;
