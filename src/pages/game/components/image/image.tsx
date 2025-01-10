import React from "react";
import { QuestionImageProps } from "../index.types";
import { imageStyles } from "./image-cva";

const QuestionImage: React.FC<QuestionImageProps> = ({
  flagUrl,
  selectedAnswer,
}) => {
  return (
    <div>
      <img
        src={flagUrl}
        alt="Country Flag"
        className={imageStyles({ blur: !selectedAnswer })}
      />
    </div>
  );
};

export default QuestionImage;
