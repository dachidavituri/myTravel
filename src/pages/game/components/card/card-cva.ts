import { cva } from "class-variance-authority";

export const gameButtonStyles = cva(
  "w-40 transform rounded-lg p-3 text-lg font-semibold transition-all duration-300",
  {
    variants: {
      selected: {
        correct: "scale-105 bg-green-500 text-white",
        incorrect: "scale-105 bg-red-500 text-white",
        default:
          "border border-gray-300 bg-orange-400 text-white hover:bg-orange-600",
      },
    },
    defaultVariants: {
      selected: "default",
    },
  },
);
