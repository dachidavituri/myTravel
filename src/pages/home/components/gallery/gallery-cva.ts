import { cva } from "class-variance-authority";

export const sectionHeader = cva(
  "mb-4 flex items-center justify-center md:justify-start",
);
export const title = cva(
  "mb-4 text-2xl font-bold text-gray-900 dark:text-white md:text-4xl",
);
export const galleryGrid = cva(
  "mt-4 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5",
);
export const imageWrapper = cva("relative overflow-hidden rounded-lg");
export const galleryImage = cva(
  "h-auto min-h-40 w-full transform cursor-pointer object-cover transition-transform duration-300 hover:scale-110",
);
