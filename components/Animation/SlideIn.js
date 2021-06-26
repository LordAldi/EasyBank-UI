import { useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
const SlideIn = ({ children, reverse }) => {
  const [ref, inView] = useInView({ triggerOnce: true });
  const animation = useAnimation();
  useEffect(() => {
    console.log(inView);
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          duration: 2.5,
          type: "spring",
          bounce: 0.3,
        },
      });
    }
  }, [inView]);
  return (
    <div ref={ref}>
      <motion.div
        animate={animation}
        initial={{
          x: `${reverse ? "100vw" : "-100vw"}`,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default SlideIn;
