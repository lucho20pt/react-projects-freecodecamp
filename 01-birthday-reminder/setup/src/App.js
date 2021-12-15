import React, { useState } from 'react';
import data from './data';
import List from './List';

function App() {

  const peopleList = data;
  
  const [people, setPeople] = useState(peopleList);

  const clearListHandler = () => {
    setPeople([]);
  }

  return <main>
    <section className="container">
      <h3>{people.length} birthdays today</h3>
      <List people={people}></List>
      <button onClick={clearListHandler}>Clear All</button>
    </section>
  </main>;
}

export default App;
