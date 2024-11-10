import { motion } from "framer-motion";

const Simple = () => {
  return (
    <motion.div
      className="bg-orange-500 w-32 h-32 rounded-full border"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 3 }}
    />
  );
};

export default Simple;
