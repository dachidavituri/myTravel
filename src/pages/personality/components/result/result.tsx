import React from "react";
import { ResultProps } from "../index.types";

const Result: React.FC<ResultProps> = ({ travelType }) => {
  return (
    <div className="w-full rounded-lg bg-white p-8 shadow-xl sm:w-96 lg:w-1/2 xl:w-1/3">
      <h2 className="mb-8 text-center text-4xl font-semibold text-black sm:text-3xl">
        Your preferred travel type is:{" "}
        <span className="font-extrabold text-orange-600">{travelType}</span>
      </h2>
    </div>
  );
};
export default Result;
