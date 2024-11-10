import { motion } from "framer-motion";
import { childVariants, shapeVariants } from "../Animation/animation";

const Variants = () => {
  return (
    <motion.div
      variants={shapeVariants}
      initial="initial"
      animate="animate"
      className="bg-green-700 w-32 h-32 rounded border m-4"
    >
      <motion.div
        className="bg-red-500 w-12 h-12 rounded-full border m-2"
        variants={childVariants}
      />
    </motion.div>
  );
};

export default Variants;
