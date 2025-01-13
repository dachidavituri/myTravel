import { cva } from "class-variance-authority";

export const videoContainerStyles = cva(
  "relative h-52 max-w-28 overflow-hidden rounded-lg border-2 border-orange-400 md:h-64 md:max-w-36",
  {
    variants: {
      margin: {
        none: "",
        md4: "md:mt-4",
        md8: "md:mt-8",
      },
    },
    defaultVariants: {
      margin: "none",
    },
  },
);
