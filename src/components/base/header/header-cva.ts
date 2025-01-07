import { cva } from "class-variance-authority";

export const navItem = cva("hover:text-orange-500 transition duration-200", {
  variants: {
    isMenuOpen: {
      true: "text-gray-600",
      false: "text-gray-800",
    },
  },
});

export const buttonStyles = cva(
  "bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition duration-200",
  {
    variants: {
      isMobile: {
        true: "md:hidden",
        false: "hidden md:block",
      },
    },
  },
);
