import React from "react";

const Categories = ({ filterItems, categories }) => {
  //
  return (
    <section className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            key={index}
            type="button"
            className="filter-btn"
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </section>
  );
};

export default Categories;
