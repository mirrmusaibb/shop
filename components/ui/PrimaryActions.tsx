import Link from "next/link";
import { motion } from "framer-motion";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type PrimaryLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

type PrimaryButtonProps = {
  children: ReactNode;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const baseClassName =
  "inline-flex min-h-12 items-center justify-center rounded-full border border-gold-400/70 bg-gold-400/20 px-6 py-3 text-sm font-semibold text-gold-300 transition duration-200 hover:bg-gold-400/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-300";

export const PrimaryLink = ({ href, children, className }: PrimaryLinkProps) => (
  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
    <Link href={href} className={`${baseClassName} ${className ?? ""}`}>
      {children}
    </Link>
  </motion.div>
);

export const PrimaryButton = ({ children, className, ...props }: PrimaryButtonProps) => (
  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="inline-flex">
    <button className={`${baseClassName} ${className ?? ""}`} {...props}>
      {children}
    </button>
  </motion.div>
);
