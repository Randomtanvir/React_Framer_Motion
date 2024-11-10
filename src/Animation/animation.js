export const shapeVariants = {
  initial: {
    opacity: 0,
    x: "-100vh",
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 6,
      type: "spring", // Favorite
    },
  },
};

export const childVariants = {
  initial: {
    scale: 1,
  },
  animate: {
    scale: 1.5,
    transition: { duration: 3 },
  },
};
