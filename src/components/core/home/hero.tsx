'use client';

import { motion } from 'motion/react';

export function Hero() {
  return (
    <motion.h1
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='mb-8 text-2xl font-semibold tracking-tighter'
    >
      My Portfolio
    </motion.h1>
  );
}
