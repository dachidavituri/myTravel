import { cva } from "class-variance-authority";

export const navItem = cva("hover:text-orange-500 transition duration-200", {
  variants: {
    isMenuOpen: {
      true: "text-sm",
      false: "text-base",
    },
  },
});
export const buttonStyles = cva(
  "text-white px-4 py-2 rounded-xl hover:bg-orange-600 transition duration-200",
  {
    variants: {
      register: {
        true: "bg-orange-500",
        false: "bg-black",
      },
    },
  },
);
