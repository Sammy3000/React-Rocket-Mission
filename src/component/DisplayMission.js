import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getMission,
  joinMission,
  allMissions,
  missionsStatus,
} from '../features/missions/missionSlice';
import styles from '../styles/DisplayMission.module.css';

const DisplayMission = ({ name, description }) => {
  const dispatch = useDispatch();
  const status = useSelector(missionsStatus);
  const missions = useSelector(allMissions);

  const handleJoinMission = (id) => dispatch(joinMission(id));
  useEffect(() => {
    if (status === 'idle') {
      dispatch(getMission());
    }
  }, [dispatch, status]);
  return (
    <div className={styles.missionItems}>
      <div className={styles.missionHead}>
        <h3>{name}</h3>
      </div>
      <div className={styles.missionInfo}>
        <p>{description}</p>
      </div>

      <div className={styles.buttons}>
        <div className={styles.buttons}>
          {missions.reserved ? (
            <button
              onClick={() => handleJoinMission(missions.mission_id)}
              type="button"
              className={styles.joinMissionBtn}
            >
              Leave Mission
            </button>
          ) : (
            <button
              onClick={() => handleJoinMission(missions.mission_id)}
              type="button"
              className={styles.joinMissionBtn}
            >
              Join Mission
            </button>
          )}
        </div>
        {missions.reserved ? (
          <button
            type="button"
            className={styles.memberBtn}
          >
            Active Member
          </button>
        ) : (
          <button
            type="button"
            className={styles.memberBtn}
          >
            NOT A MEMBER
          </button>
        )}
      </div>
    </div>
  );
};

export default DisplayMission;
