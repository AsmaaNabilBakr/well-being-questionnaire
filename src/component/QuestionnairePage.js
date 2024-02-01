import React, { useContext } from "react";
import { QuestionnaireContext } from "../App";
import Option from "./Option";
import Question from "./Question";
import Submit from "./Submit";
function QuestionnairePage() {
  const {
    setAllAnswers,
    isDone,
    setIsDone,
    currentQuestion,
    setCurrentQuestion,
    allQuestions,
  } = useContext(QuestionnaireContext);

  const handleSelectOption = (option) => {
    console.log(option);
    const questionWzAnswer = {
      Q: allQuestions[currentQuestion].question,
      A: option,
    };
    setAllAnswers((prev) => [...prev, questionWzAnswer]);
    if (currentQuestion < allQuestions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else if (currentQuestion === allQuestions.length - 1) setIsDone(true);
  };

  return isDone ? (
    <Submit />
  ) : (
    <div className="page-container">
      <div className="question-container">
        <Question />
        <Option handleSelectOption={handleSelectOption} />
      </div>
    </div>
  );
}

export default QuestionnairePage;
