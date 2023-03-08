import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getMission,
  joinMission,
  allMissions,
} from '../features/missions/missionSlice';
import styles from '../styles/DisplayMission.module.css';

const DisplayMission = ({ name, description }) => {
  const dispatch = useDispatch();
  const missions = useSelector(allMissions);

  const handleJoinMission = (id) => dispatch(joinMission(id));
  useEffect(() => {
    dispatch(getMission());
  }, [dispatch]);
  function displayJoinMission(currentState) {
    return currentState ? 'Leave Mission' : 'Join Mission';
  }
  return (
    <div className={styles.missionItems}>
      <div className={styles.missionHead}>
        <h3>{name}</h3>
      </div>
      <div className={styles.missionInfo}>
        <p>{description}</p>
      </div>

      <div className={styles.buttons}>
        <button
          onClick={handleJoinMission(missions.mission_id)}
          type="button"
          className={styles.joinMissionBtn}
        >
          {displayJoinMission(missions.reserved)}
        </button>
      </div>
      <div className={styles.buttons}>
        <button
          type="button"
          className={styles.memberBtn}
        >
          NOT A MEMBER
        </button>
      </div>
    </div>
  );
};

export default DisplayMission;
