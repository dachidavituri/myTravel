import { cva } from "class-variance-authority";

export const imageStyles = cva("mb-6 h-40 w-60", {
  variants: {
    blur: {
      true: "blur-xl filter",
      false: "filter-none",
    },
  },
  defaultVariants: {
    blur: true,
  },
});
