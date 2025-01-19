import { cva } from "class-variance-authority";

export const containerStyles = cva("w-full rounded-lg bg-white p-8 shadow-xl", {
  variants: {
    size: {
      sm: "sm:w-96",
      lg: "lg:w-1/2",
      xl: "xl:w-1/3",
    },
  },
  defaultVariants: {
    size: "lg",
  },
});

export const questionHeadingStyles = cva(
  "mb-8 text-center font-semibold text-black",
  {
    variants: {
      size: {
        sm: "text-3xl",
        lg: "text-4xl",
      },
    },
    defaultVariants: {
      size: "lg",
    },
  },
);

export const buttonStyles = cva(
  "w-full transform rounded-lg bg-gray-200 p-5 text-left transition duration-300 ease-in-out focus:outline-none",
  {
    variants: {
      state: {
        default: "text-black hover:scale-105 hover:bg-gray-300",
      },
      size: {
        sm: "text-base",
        lg: "text-lg",
      },
    },
    defaultVariants: {
      state: "default",
      size: "lg",
    },
  },
);
