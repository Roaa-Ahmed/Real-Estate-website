import React from "react";
// LOCAL COMPONENTS
import {Footer,Navbar,ScrollTopButton} from'@/Components'
import { layoutVariants } from "../animations/BrowserAnimation";

// EXTARNAL COMPONENTS
import { Outlet } from "react-router-dom";
import { AnimatePresence,motion } from "framer-motion";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          variants={layoutVariants}
          initial="hidden"
          whileInView="show"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <ScrollTopButton />
      <Footer />
    </>
  );
};

export default MainLayout;
