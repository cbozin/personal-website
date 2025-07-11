'use client';
import { motion } from 'framer-motion';

export function ScrollAnimate({
  children,
  delay = 0,
  yOffset = 20
}: {
  children: React.ReactNode;
  delay?: number;
  yOffset?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}