import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

const allCategorys = ["all", ...new Set(items.map((item) => item.category))];
console.log(allCategorys);

function App() {
  //
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategorys);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
      </section>
      <Categories filterItems={filterItems} categories={categories} />
      <Menu items={menuItems} />
    </main>
  );
}

export default App;
