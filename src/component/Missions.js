import React, { useEffect } from "react";
import DisplayMission from "./DisplayMission";
import styles from "../styles/Missions.module.css";
import { useDispatch } from "react-redux";
import { getMission } from "../features/missions/missionSlice";
function Missions() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMission());
  }, [dispatch]);
  return (
    <div className={styles.missionsContainer}>
      <div className={styles.missionsHeader}>
        <div>
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
      <DisplayMission />
    </div>
  );
}

export default Missions;
