/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const Box = ({ text }) => {
  return (
    <motion.div
      className="w-52 h-52 border rounded-sm bg-red-500 text-black m-4 text-center"
      initial={{ opacity: 0, x: -500 }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 1,
        },
      }}
      viewport={{ once: false }}
      exit={{
        x: "-100vw",
        transition: {
          ease: "easeInOut",
          duration: 1,
        },
      }}
    >
      {text}
    </motion.div>
  );
};

const ScrollReveal = () => {
  const greetings = ["Hello", "Holla", "Welcome", "Namaste", "Come In"];
  return (
    <div>
      {greetings.map((greeting, index) => (
        <Box key={index} text={greeting} />
      ))}
    </div>
  );
};

export default ScrollReveal;
