import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

const getLocalStorage = () => {
  let list = localStorage.getItem('grocery-list')
  if(list){
    return JSON.parse(list)
  }else{
    return [];
  }
}

function App() {
  // states

  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({
    show: null,
    type: "",
    msg: "",
  });

  // on SUBMIT
  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (!name) {
      // setAlert({ show: true, type: "danger", msg: "message" });
      showAlert(true, "danger", "please enter a grocery item name");
      console.log("empty field");
      //
    } else if (name && isEditing) {
      // console.log("if isEditing");

      const newList = list.map((item) => {
        if (item.id === editID) {
          return { ...item, title: name };
        }
        return item;
      });
      setList(newList);
      setIsEditing(false);
      setEditID(null);
      setName("");
      showAlert(true, "success", "item updated");
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

  // CLEAR items list
  const clearItemsList = () => {
    setList("");
    showAlert(true, "danger", "Cleared Grocery Items List");
  };

  // EDIT Item
  const editItemHandler = (id) => {
    // console.log(id);
    const editItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(editItem.title);
  };

  // REMOVE Item
  const removeItemHandler = (id) => {
    if (window.confirm("Are you sure you want to delete Grocery Item?")) {
      // Save it!
      const newList = list.filter((item) => item.id !== id);
      showAlert(true, "danger", "item removed");
      setList(newList);
    }
  };

  // showAlert params
  const showAlert = (show = false, type = "", msg = "") => {
    return setAlert({ show, type, msg });
  };

  useEffect(() => {
    localStorage.setItem('grocery-list', JSON.stringify(list));
    return () => console.log('cleanup')
  }, [list])

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={onSubmitHandler}>
        <h3>grocery bud</h3>
        {alert.show && <Alert {...alert} removeAlert={showAlert} />}
        <div className="form-control">
          <input
            type="text"
            // className={`grocery ${alert.show === false && "error"}`}
            className={`grocery`}
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
        {list.length > 0 && (
          <List
            items={list}
            removeItem={removeItemHandler}
            editItem={editItemHandler}
          />
        )}
        <button className="clear-btn" onClick={clearItemsList}>
          clear items
        </button>
      </div>
    </section>
  );
}

export default App;
