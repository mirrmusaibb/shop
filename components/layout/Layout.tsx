import { AnimatePresence, motion } from "framer-motion";
import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

type LayoutProps = {
  children: ReactNode;
  routeKey: string;
};

export const Layout = ({ children, routeKey }: LayoutProps) => {
  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-black focus:px-4 focus:py-2 focus:text-white">
        Skip to content
      </a>
      <Navbar />
      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          id="main-content"
          key={routeKey}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="min-h-screen pb-16 pt-28"
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </>
  );
};
