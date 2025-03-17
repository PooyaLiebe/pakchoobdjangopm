/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Header from "../Components/Common/Header";
import { AnimatePresence, motion } from "framer-motion";

const PmSubmit = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title={"Pm Submit"} />
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <motion.div
          className="flex-1 overflow-auto relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div>Hello Boys</div>
        </motion.div>
      </main>
    </div>
  );
};

export default PmSubmit;
