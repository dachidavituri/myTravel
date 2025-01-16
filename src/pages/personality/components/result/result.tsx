import React from "react";
import { ResultProps, TravelType } from "../index.types";

const Result: React.FC<ResultProps> = ({ answers }) => {
  const calculateTravelType = (): TravelType | undefined => {
    const travelTypeCounts = answers.reduce(
      (acc, travelType) => {
        acc[travelType] = (acc[travelType] || 0) + 1;
        return acc;
      },
      {} as Record<TravelType, number>,
    );
    const maxCount = Math.max(...Object.values(travelTypeCounts));
    return Object.keys(travelTypeCounts).find(
      (key) => travelTypeCounts[key as TravelType] === maxCount,
    ) as TravelType | undefined;
  };

  return (
    <div className="w-full rounded-lg bg-white p-8 shadow-xl sm:w-96 lg:w-1/2 xl:w-1/3">
      <h2 className="mb-8 text-center text-4xl font-semibold text-black sm:text-3xl">
        Your preferred travel type is:{" "}
        <span className="font-extrabold text-orange-600">
          {calculateTravelType()}
        </span>
      </h2>
    </div>
  );
};
export default Result;
