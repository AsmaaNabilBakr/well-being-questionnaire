import React, { createContext, useEffect, useState } from "react";
import "./App.css";
import QuestionnairePage from "./component/QuestionnairePage";

export const QuestionnaireContext = createContext();

function App() {
  let [allQuestions, setAllQuestions] = useState([]);
  const [allAnswers, setAllAnswers] = useState([]);
  const [isDone, setIsDone] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  useEffect(() => {
    const getData = async () => {
      const questions = await fetch("http://localhost:3001/questions");
      const data = await questions.json();
      setAllQuestions(data);
    };
    getData();
  }, []);
  return (
    <QuestionnaireContext.Provider
      value={{
        allAnswers,
        setAllAnswers,
        isDone,
        setIsDone,
        currentQuestion,
        setCurrentQuestion,
        allQuestions,
      }}
    >
      <div className="App-header">M</div>

      <div className="App">
        <div className={`left-side ${isDone ? "submit-phase" : ""}`} />
        <div className="dots">
          {allQuestions.map((q, index) => (
            <span
              key={index}
              className={`dot ${
                index === currentQuestion && !isDone ? "active" : ""
              }`}
            />
          ))}
          <span className={`dot ${isDone ? "active" : ""}`} />
        </div>
        <QuestionnairePage />
      </div>
    </QuestionnaireContext.Provider>
  );
}

export default App;
