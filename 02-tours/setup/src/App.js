import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
// const url = "https://course-api.com/react-tours-project";
const url =
  "https://my-json-server.typicode.com/lucho20pt/my-json-server/tours";

function App() {
  //
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  // remove Tour
  const removeTourHandler = (id) => {
    console.log(id);
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  // fetch data
  const fetchTours = async () => {
    setLoading(true);
    try {
      const result = await fetch(url);
      const data = await result.json();
      // console.log(data);
      setLoading(false);
      setTours(data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  // use effect
  useEffect(() => {
    fetchTours();
    return () => {
      console.log("cleanup");
    };
  }, []);

  // if loading
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  // if empty
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No tours left...</h2>
          <div className="underline"></div>
          <button className="btn" onClick={fetchTours}>
            Refresh Tours List
          </button>
        </div>
      </main>
    );
  }

  // MAIN
  return (
    <main>
      <Tours tours={tours} removeTour={removeTourHandler} />
    </main>
  );
}

export default App;
