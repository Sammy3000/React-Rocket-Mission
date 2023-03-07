import React, { useEffect } from "react";
import DisplayMission from "./DisplayMission";
import styles from "../styles/Missions.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getMission } from "../features/missions/missionSlice";
function Missions() {
  const dispatch = useDispatch();
  const { mission } = useSelector((store) => store.mission);
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
      {mission.map((mision) => {
        return (
          <DisplayMission
            key={mision.mission_id}
            id={mision.mission_id}
            name={mision.mission_name}
            description={mision.description}
          />
        );
      })}
    </div>
  );
}

export default Missions;
