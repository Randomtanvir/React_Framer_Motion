import { motion } from "framer-motion";

const KeyFrame = () => {
  return (
    <motion.div
      className="bg-orange-500 w-32 h-32 m-4 border"
      animate={{
        borderRadius: ["0%", "5%", "150%", "30%", "30%", "20%", "0%"],
        rotate: [0, 30, 90, 180, 270, 0],
        scale: [1, 1, 2, 1.5, 3, 1],
      }}
      transition={{ duration: 5 }}
      exit={{
        x: "-100vw",
        transition: {
          ease: "easeInOut",
          duration: 1,
        },
      }}
    />
  );
};

export default KeyFrame;
