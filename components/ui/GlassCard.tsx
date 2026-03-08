import { motion } from "framer-motion";
import type { ReactNode } from "react";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
};

export const GlassCard = ({ children, className }: GlassCardProps) => {
  return (
    <motion.article
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={`glass-card ${className ?? ""}`}
    >
      {children}
    </motion.article>
  );
};
