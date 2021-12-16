import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
// const url = "https://course-api.com/react-tours-project";
const url = "https://my-json-server.typicode.com/lucho20pt/my-json-server/tours";


function App() {
  //
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  // fetch data
  const fetchTours = async () => {
    setLoading(true);
    try {
      const result = await fetch(url);
      const data = await result.json();
      console.log(data);
      setTours(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // use effect
  useEffect(() => {
    fetchTours();
    return () => {
      console.log("cleanup");
    };
  }, []);

  // loading
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} />
    </main>
  );
}

export default App;
