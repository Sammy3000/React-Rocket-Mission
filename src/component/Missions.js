import React from "react";
import displayMission from "./displayMission";
import styles from "../styles/Missions.module.css";
function Missions() {
  return (
    <div className={styles.missionsContainer}>
      <div className={styles.missionsHeader}>
        <div>
          {" "}
          <p>Mission</p>
        </div>
        <div>
          <p>Description</p>
        </div>
        <div>
          <p>Status</p>
        </div>
        <div />
      </div>
    </div>
  );
}

export default Missions;
