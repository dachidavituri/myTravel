import { cva } from "class-variance-authority";

export const buttonStyles = cva(
  "flex items-center  rounded-lg border px-2 py-3 transition-all",
  {
    variants: {
      selected: {
        true: "bg-orange-500 text-white",
        false: "bg-white hover:bg-gray-100",
      },
    },
    defaultVariants: {
      selected: false,
    },
  },
);

export const bookBtnStyles = cva(
  "w-full rounded-lg bg-gradient-to-r from-orange-400 to-orange-600 py-3 text-lg font-bold text-white shadow-lg hover:from-red-300 hover:to-red-600",
);
