import React from "react";

import Singer from "../components/Singer";
import JHImage from "../assets/jh.jpeg";
import JMImage from "../assets/jimin.jpeg";
import JINImage from "../assets/jin.jpeg";
import JKImage from "../assets/jk.jpeg";
import RMImage from "../assets/rm.jpeg";
import SGImage from "../assets/suga.jpeg";
import VIImage from "../assets/vi.jpeg";

function Profile({ onProfileSelected }) {
  return (
    <div className="container">
      <div className="animation-container">
        <header>
          <h1>Quem é o seu UTT?</h1>
        </header>

        <div className="profile-container">
          <Singer onClick={onProfileSelected("rm")} image={RMImage} name="RM" />

          <Singer
            onClick={onProfileSelected("jin")}
            image={JINImage}
            name="Jin"
          />

          <Singer
            onClick={onProfileSelected("suga")}
            image={SGImage}
            name="Suga"
          />

          <Singer
            onClick={onProfileSelected("j-hope")}
            image={JHImage}
            name="J-Hope"
          />

          <Singer
            onClick={onProfileSelected("jimin")}
            image={JMImage}
            name="Jimin"
          />

          <Singer onClick={onProfileSelected("vi")} image={VIImage} name="V" />

          <Singer
            onClick={onProfileSelected("jungkook")}
            image={JKImage}
            name="Jungkook"
          />
        </div>
      </div>
    </div>
  );
}

export default Profile;
