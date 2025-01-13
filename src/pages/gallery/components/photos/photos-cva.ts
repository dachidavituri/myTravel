import { cva } from "class-variance-authority";

export const gridContainer = cva(
  "m-auto mt-4 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5",
);
export const imageWrapper = cva("relative overflow-hidden rounded-lg");
export const image = cva(
  "min-h-40 h-auto w-full transform cursor-pointer object-cover transition-transform duration-300 hover:scale-110",
);
export const modalWrapper = cva(
  "fixed inset-0 flex items-center justify-center rounded-lg bg-black bg-opacity-50 p-4",
);
export const modalImageWrapper = cva("relative rounded-lg");
export const modalImage = cva(
  "max-h-[90vh] max-w-full rounded-lg object-contain",
);
export const closeButton = cva(
  "absolute right-0 top-0 p-2 text-2xl text-white",
);
