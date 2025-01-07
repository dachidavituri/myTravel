import { cva } from "class-variance-authority";

export const navItem = cva(
  "hover:text-orange-500 transition duration-200 text-sm lg:text-base",
);
export const container = cva(
  "container mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-around gap-8",
);
