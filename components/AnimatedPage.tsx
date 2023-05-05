import React from "react";
import { motion } from "framer-motion";

type AnimatedPageProps = {
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
};

export default function AnimatedPage({
  children,
  className,
}: AnimatedPageProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 0.5,
      }}
    >
      {children}
    </motion.div>
  );
}
