import React from "react";

const Categories = ({ filterItems }) => {
  //
  return (
    <section className="btn-container">
      <button className="filter-btn" onClick={() => filterItems("all")}>
        All
      </button>
      <button className="filter-btn" onClick={() => filterItems("breakfast")}>
        Breakfast
      </button>
    </section>
  );
};

export default Categories;
