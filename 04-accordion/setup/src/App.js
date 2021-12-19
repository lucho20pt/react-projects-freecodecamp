import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";

function App() {
  //
  // console.log(data);
  // const list = data;
  const [list, setList] = useState(data)

  return (
    <main>
      <section className="container">
        <h3>questions and answers about login</h3>
        <div>
          {list.map((item) => (
            <SingleQuestion key={item.id} {...item} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
