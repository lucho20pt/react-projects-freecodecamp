import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
// const url = 'https://course-api.com/react-tabs-project';
const url = "https://my-json-server.typicode.com/lucho20pt/my-json-server/tabs";

function App() {
  //
  const [loading, setLoading] = useState(false);
  const [jobs, setJobs] = useState([]);
  const { company, dates, duties, id, order, title } = jobs;

  // fetch
  const fetchData = async () => {
    setLoading(true);
    try {
      const result = await fetch(url);
      const data = await result.json();
      console.log(data);
      setJobs(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log('error ', error);
    }
  };

  // useEffect
  useEffect(() => {
    fetchData();
    return () => {
      console.log("cleanup");
    };
  }, []);

  // loading
  if (loading) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    );
  }
  
  // main
  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>

      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
          <button className={"job-btn active-btn"}>item.company</button>
        </div>

        {/* job info */}
        <article className="job-info">
          <h3>title</h3>
          <h4>company</h4>
          <p className="job-date">dates</p>

          <div className="job-desc">
            <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
            <p>jobs</p>
          </div>
        </article>
      </div>

      <button type="button" className="btn">
        more info
      </button>
    </section>
  );
}

export default App;
