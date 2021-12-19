import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  //
  // const allCategorys = [
  //   "All",
  //   {
  //     ...items.map((item) =>
  //       item.category
  //     ),
  //   },
  // ];
  // console.log(allCategorys);

  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([]);
  // console.log(categories);
  const filterItems = (category) => {
    const newItems = items.filter((item) => item.category === category);
    console.log(newItems);
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
      <Categories filterItems={filterItems} />
      <Menu items={menuItems} />
    </main>
  );
}

export default App;
