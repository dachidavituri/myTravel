import { cva } from "class-variance-authority";

export const container = cva(
  "w-full md:w-1/2 bg-white p-6 md:p-8 flex flex-col justify-center items-center",
);

export const heading = cva("text-3xl font-bold text-orange-500");

export const paragraph = cva("text-gray-600 mt-2", {
  variants: {
    size: {
      sm: "text-sm",
      md: "text-base",
    },
  },
  defaultVariants: {
    size: "sm",
  },
});

export const form = cva("w-full mt-6 space-y-4");

export const input = cva(
  "w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500",
  {
    variants: {
      size: {
        sm: "text-sm",
        md: "text-base",
      },
    },
    defaultVariants: {
      size: "sm",
    },
  },
);

export const button = cva(
  "w-full bg-orange-500 text-white p-3 rounded-md hover:bg-orange-600",
  {
    variants: {
      size: {
        sm: "text-sm",
        md: "text-base",
      },
    },
    defaultVariants: {
      size: "sm",
    },
  },
);

export const footerText = cva("mt-6 text-center", {
  variants: {
    size: {
      sm: "text-sm",
      md: "text-base",
    },
  },
  defaultVariants: {
    size: "sm",
  },
});

export const link = cva("text-orange-500 font-semibold hover:underline");
