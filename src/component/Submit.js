import { Button } from "@mui/material";
import React, { useContext } from "react";
import { QuestionnaireContext } from "../App";
import { RenderIcon } from "./Option";
function Submit() {
  const { allAnswers } = useContext(QuestionnaireContext);
  console.log(allAnswers);
  const handleSave = async () => {
    try {
      await fetch("http://localhost:3001/answers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          allAnswers,
        }),
      });

      console.log("Data replaced successfully!");
    } catch (error) {
      console.error("Error replacing data:", error);
    }
  };
  return (
    <div className="submit-page">
      <span className="page-title">An Overview of your answers</span>
      {allAnswers.map((answer, index) => (
        <div className="answer" key={index}>
          <div>{answer.Q}</div>
          {RenderIcon(answer.A)}
        </div>
      ))}
      <Button variant="contained" onClick={handleSave}>
        Submit
      </Button>
    </div>
  );
}

export default Submit;
