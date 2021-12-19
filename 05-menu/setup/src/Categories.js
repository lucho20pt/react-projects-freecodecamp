import React from "react";

const Categories = ({ filterItems }) => {
  //
  return (
    <section className="btn-container">
      <button className="filter-btn" onClick={() => filterItems("breakfast")}>
        breakfast
      </button>
    </section>
  );
};

export default Categories;
