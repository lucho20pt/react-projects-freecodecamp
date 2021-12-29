import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  // states
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    type: "",
    msg: "",
  });

  // submit
  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (!name) {
      // setAlert({ show: true, type: "danger", msg: "message" });
      showAlert(true, "danger", "please enter a grocery item name");
    } else if (!name && isEditing) {
    }
    console.log("name");
  };

  // show Alert params
  const showAlert = (show = false, type = "", msg = "") => {
    return setAlert({ show, type, msg });
  };

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={onSubmitHandler}>
        {alert.show && <Alert {...alert} />}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g. eggs"
            onChange={(e) => setName(e.target.value)}
          />

          <button type="submit" className="submit-btn">
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>

      <div className="grocery-container">
        {list.length > 0 && <List items={list} />}
        <button className="clear-btn">clear items</button>
      </div>
    </section>
  );
}

export default App;
