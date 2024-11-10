import { motion } from "framer-motion";
const TextMotion = () => {
  const text =
    "we are enjoying framer motion. Thaks reactive accilator coures learn With sumit and atapash";
  const textArry = text.split(" ");
  return (
    <div className="bg-teal-600 p-4">
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
    </div>
  );
};

export default TextMotion;
