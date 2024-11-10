import { animate, useMotionValue, useTransform, motion } from "framer-motion";
import { useEffect } from "react";

const Counter = () => {
  const count = useMotionValue(0);
  const roundedValue = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, 100, { duration: 3 });

    return animation.stop;
  }, [count]);

  return <motion.div>{roundedValue}</motion.div>;
};

export default Counter;
