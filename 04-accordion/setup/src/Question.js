import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({ info, title }) => {
  //
  const [answer, setAnswer] = useState(false);
  const answerHandler = () => {
    setAnswer(!answer);
  };

  return (
    <article className="question">
      <header>
        <h4>{title} </h4>
        <button className="btn" onClick={answerHandler}>
          {answer ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {answer && <p>{info}</p>}
    </article>
  );
};

export default Question;
