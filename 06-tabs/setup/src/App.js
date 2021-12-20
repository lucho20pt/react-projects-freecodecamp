import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
// const url = 'https://course-api.com/react-tabs-project';
const url = "https://my-json-server.typicode.com/lucho20pt/my-json-server/tabs";

function App() {
  //
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(1);
  

  // fetch
  const fetchData = async () => {
    setLoading(true);
    try {
      const result = await fetch(url);
      const data = await result.json();
      // console.log(data);
      setJobs(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("error ", error);
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
  const { company, dates, duties, title } = jobs[value];
  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>

      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
          {jobs.map((item, index) => {
            return (
              <button
                key={index}
                onClick={() => {
                  setValue(index);
                }}
                className={`job-btn ${index == value ? "active-btn" : ""}`}
              >
                {item.company}
              </button>
            );
          })}
        </div>

        {/* job info */}
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>

          {duties.map((dutie, index) => {
            return (
              <div className="job-desc" key={index}>
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{dutie}</p>
              </div>
            );
          })}
        </article>
      </div>

      <button type="button" className="btn">
        more info
      </button>
    </section>
  );
}

export default App;
