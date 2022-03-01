import React, { useState } from "react";
import SingleQuestion from "./question";
import data from "./data";

const App = () => {
  const [questions, setQuestion] = useState(data);
  return (
    <main>
      <div className='container'>
        <h1 className='question-header'>question and answer</h1>
        <div>
          {questions.map((question) => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
        </div>
      </div>
    </main>
  );
};

export default App;
