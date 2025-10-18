'use client';

import { motion } from "framer-motion";
const ScaleInText = ({
  text = "Think Different"
}) => {
  return <h2 className="text-4xl   text-white md:text-6xl font-bold text-start">
            {text.split('').map((char, i) => <motion.span key={i} initial={{
      scale: 0,
      opacity: 0
    }} animate={{
      scale: 1,
      opacity: 1
    }} transition={{
      delay: i * 0.08,
      type: 'spring',
      stiffness: 150,
      damping: 10
    }} className="inline-block">
                    {char === ' ' ? '\u00A0' : char}
                </motion.span>)}
        </h2>;
};
const TextAnimation = ({text}) => {
  return <div className="flex flex-col  items-center justify-start font-sans py-4 ">
            <ScaleInText text={text}/>
        </div>;
};
export default TextAnimation;