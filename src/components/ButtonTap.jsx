import { motion } from "framer-motion";

const ButtonTap = () => {
  return (
    <div>
      <motion.button
        className="bg-teal-400 text-sm w-28 px-5 py-2 rounded-sm text-white"
        whileTap={{ scale: 1.1 }}
        whileHover={{
          scale: 0.8,
          transition: { yoto: Infinity },
        }}
        exit={{
          y: "-100vw",
          transition: {
            ease: "easeInOut",
            duration: 1,
          },
        }}
      >
        Click me
      </motion.button>
    </div>
  );
};

export default ButtonTap;
