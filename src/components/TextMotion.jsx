import { motion } from "framer-motion";
const TextMotion = () => {
  const text =
    "we are enjoying framer motion. Thaks reactive accilator coures learn With sumit and atapash";
  const textArry = text.split(" ");
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      exit={{
        x: "-100vw",
        transition: {
          ease: "easeInOut",
          duration: 1,
        },
      }}
      className="bg-teal-600 p-4"
    >
      {textArry.map((word, i) => (
        <motion.span
          key={i}
          className="text-2xl text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 2,
            delay: i / 5,
          }}
        >
          {word + " "}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default TextMotion;
