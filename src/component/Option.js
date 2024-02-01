import React, { useContext, useState } from "react";
import { QuestionnaireContext } from "../App";
import NotSure from "../assets/thinking-face.svg";
import ThumbDown from "../assets/thumbs-down.svg";
import ThumbUp from "../assets/thumbs-up-emoji.svg";
export const RenderIcon = (option) => {
  switch (option) {
    case "Good":
      return <img src={ThumbUp} alt="Good" />;
    case "Bad":
      return <img src={ThumbDown} alt="Bad" />;
    case "Not Sure":
      return <img src={NotSure} alt="Not Sure" />;

    default:
      return <></>;
  }
};
function Option({ handleSelectOption }) {
  const [hoveredOption, setHoveredOption] = useState(null);
  const { currentQuestion, allQuestions } = useContext(QuestionnaireContext);
  const question = allQuestions[currentQuestion];
  const hoverOption = (index) => {
    setHoveredOption(index);
  };

  const unhoverOption = () => {
    setHoveredOption(null);
  };

  // console.log(index);
  return (
    <div className="options">
      {question?.options.map((option, index) => (
        <div
          key={index}
          className="option"
          onMouseOver={() => hoverOption(index)}
          onMouseOut={unhoverOption}
          onClick={() => handleSelectOption(option)}
          style={{
            opacity: hoveredOption === index || hoveredOption == null ? 1 : 0.2,
          }}
        >
          {RenderIcon(option)}
          <span className="title">{option}</span>
        </div>
      ))}
    </div>
  );
}

export default Option;
