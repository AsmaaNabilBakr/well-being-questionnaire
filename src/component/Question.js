import React, { useContext } from "react";
import { QuestionnaireContext } from "../App";

function Question() {
  const { currentQuestion, allQuestions } = useContext(QuestionnaireContext);
  const question = allQuestions[currentQuestion];
  return (
    <div className="question">
      <div className={question?.id === question ? "active" : ""}>
        {question?.question}
      </div>
    </div>
  );
}

export default Question;
