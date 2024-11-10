import { useState } from "react";
import { motion } from "framer-motion";

const staggerAni = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { duration: 2, delay: 2 },
  },
};

const Stagger = () => {
  const [toggle, setToggle] = useState(true);

  const data = ["Home", "Servicr", "Contact", "About", "Project", "Portfoli"];

  return (
    <nav className="realtive">
      <motion.div
        whileTap={{
          scale: 0.97,
        }}
        exit={{
          x: "-100vw",
          transition: {
            ease: "easeInOut",
            duration: 1,
          },
        }}
        onClick={() => setToggle(!toggle)}
        className="flex w-96 text-xl justify-between px-5 p-2 cursor-pointer bg-black text-white mt-5 rounded-md items-center "
      >
        <div>Menu</div>
        <motion.div
          className={`${
            toggle
              ? "transform rotate-180 transition duration-500"
              : "transform rotate-0 transition duration-500"
          }`}
        >
          ▼
        </motion.div>
      </motion.div>
      <motion.div
        className={` bg-black text-white  w-96 mt-1 rounded-md absolute transition top-18 duration-1000  ${
          toggle
            ? "transform scale-100 transition duration-200"
            : "transform scale-0 transition duration-200"
        }`}
      >
        {data.map((d, i) => (
          <motion.ul
            variants={toggle && staggerAni}
            initial={toggle && "initial"}
            animate={toggle && "animate"}
            key={d}
          >
            <li className="m-2 p-1">{d}</li>
          </motion.ul>
        ))}
      </motion.div>
    </nav>
  );
};

export default Stagger;
