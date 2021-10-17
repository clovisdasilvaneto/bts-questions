import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";

import Profile from "./containers/Profile";
import Question from "./containers/Question";

const setViewPort = () => {
  const vh = window.innerHeight * 0.01;
  // Set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty("--vh", `${vh}px`);
};

function App() {
  useEffect(() => {
    setViewPort();
    window.addEventListener("resize", setViewPort);

    return () => {
      window.removeEventListener("resize", setViewPort);
    };
  }, []);

  const [profile, setProfile] = useState();

  const handleProfileSelected = (profile) => () => setProfile(profile);

  return (
    <main>
      <MotionConfig transition={{ duration: 1 }}>
        <AnimatePresence exitBeforeEnter>
          {Boolean(!profile) ? (
            <motion.div
              key="profile"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              <Profile onProfileSelected={handleProfileSelected} />
            </motion.div>
          ) : (
            <motion.div
              key="pergunta"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              <Question profile={profile} />
            </motion.div>
          )}
        </AnimatePresence>
      </MotionConfig>
    </main>
  );
}

export default App;
