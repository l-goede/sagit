import { motion } from 'framer-motion';
import React from 'react';

const svgVariants = {
  hidden: { rotate: 0 },
  visible: {
    rotate: 45,
    transition: { duration: 1 },
  },
};

function RingIcon(): JSX.Element {
  return (
    <motion.svg
      width="16"
      height="20"
      viewBox="0 0 19.375 22"
      variants={svgVariants}
      initial="hidden"
      animate="visible"
    >
      <g id="Notification" transform="translate(0.5 0.5)">
        <path
          d="M9.187,21a2.625,2.625,0,0,0,2.624-2.625H6.564A2.625,2.625,0,0,0,9.187,21Zm8.834-6.14c-.792-.851-2.275-2.132-2.275-6.328A6.477,6.477,0,0,0,10.5,2.167V1.313a1.312,1.312,0,1,0-2.623,0v.855A6.477,6.477,0,0,0,2.628,8.531c0,4.2-1.483,5.477-2.275,6.328A1.281,1.281,0,0,0,0,15.75a1.314,1.314,0,0,0,1.317,1.313H17.058a1.313,1.313,0,0,0,1.317-1.312,1.281,1.281,0,0,0-.353-.89Z"
          transform="translate(0) rotate(360deg)"
          fill="var(--secondary-text-color)"
          stroke="var(--secondary-text-color)"
          stroke-width="1"
        />
      </g>
    </motion.svg>
  );
}

export default RingIcon;
