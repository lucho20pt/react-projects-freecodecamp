import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  //

  const [menuItems, setMenuItems] = useState(items);
  const [categoryItem, setCategoryItem] = useState([]);
  // console.log(categoryItem);

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
      </section>
      <Menu items={menuItems} />
    </main>
  );
}

export default App;
