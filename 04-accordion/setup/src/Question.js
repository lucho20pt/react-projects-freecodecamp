import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({ info, title }) => {
  //
  const [answer, setAnswer] = useState(false);
  const answerHandler = () => {
    setAnswer(!answer);
  }

  return (
    <article className="question">
      <header>
        <h4>{title} </h4>
        <div onClick={answerHandler}>
          {answer && <AiOutlineMinus className="btn" />}
        {!answer && <AiOutlinePlus className="btn" />}
        </div>
      </header>
      <p className="info">{answer && `${info}`}</p>
    </article>
  );
};

export default Question;
