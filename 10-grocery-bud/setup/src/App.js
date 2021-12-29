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
      console.log("empty field");
      //
    } else if (name && isEditing) {
      console.log("edit->", name);
      //
    } else {
      // console.log("add->", name);
      const newId = new Date().getTime().toString();
      const newList = [...list, { id: newId, title: name }];
      // console.log(newList);
      setList(newList);
      showAlert(true, "success", "new grocery item added");
      setName("");
    }
  };

  // showAlert params
  const showAlert = (show = false, type = "", msg = "") => {
    return setAlert({ show, type, msg });
  };

  // clear Alert
  useEffect(() => {
    const timeout = setTimeout(() => {
      showAlert();
    }, 2500);
    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={onSubmitHandler}>
        <h3>grocery bud</h3>
        {alert.show && <Alert {...alert} />}
        <div className="form-control">
          <input
            type="text"
            className={`grocery ${alert.show && 'error'}`}
            placeholder="e.g. eggs"
            value={name}
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
