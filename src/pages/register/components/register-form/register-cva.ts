import { cva } from "class-variance-authority";

export const container = cva(
  "w-full md:w-1/2 bg-white p-8 md:p-12 flex flex-col justify-center items-center rounded-lg shadow-lg transition-all duration-300 dark:bg-gray-800",
);

export const heading = cva(
  "text-4xl font-extrabold text-orange-500 mb-4 text-center tracking-wide",
);

export const paragraph = cva("text-gray-600 mb-6 text-center", {
  variants: {
    size: {
      sm: "text-sm",
      md: "text-lg",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export const form = cva("w-full space-y-6");

export const input = cva(
  "w-full p-4 border border-gray-300 rounded-lg shadow-sm  text-gray-800 transition dark:bg-gray-700 dark:text-white dark:border-gray-600",
  {
    variants: {
      size: {
        sm: "text-sm",
        md: "text-base",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export const footerText = cva("mt-8 text-gray-600 text-center", {
  variants: {
    size: {
      sm: "text-sm",
      md: "text-base",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export const link = cva(
  "text-orange-500 font-semibold hover:underline transition-colors duration-300 dark:text-orange-400",
);
