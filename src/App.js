import React, { useState } from "react";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";

import Profile from "./containers/Profile";
import Question from "./containers/Question";

function App() {
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
