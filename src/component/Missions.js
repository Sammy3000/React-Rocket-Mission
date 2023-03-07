import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DisplayMission from './DisplayMission';
import styles from '../styles/Missions.module.css';
import { getMission } from '../features/missions/missionSlice';

function Missions() {
  const { mission } = useSelector((store) => store.mission);
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
      {mission.map((mision) => (
        <DisplayMission
          key={mision.mission_id}
          id={mision.mission_id}
          name={mision.mission_name}
          description={mision.description}
        />
      ))}
    </div>
  );
}

export default Missions;
