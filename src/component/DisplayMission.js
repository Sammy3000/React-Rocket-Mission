import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../styles/DisplayMission.module.css';
import { joinMission } from '../features/missions/missionSlice';

const DisplayMission = ({ id, name, description }) => {
  const dispatch = useDispatch();
  const { mission } = useSelector((store) => store.mission);
  const handleJoinMission = (id) => dispatch(joinMission(id));
  return (
    <div className={styles.missionItems}>
      <div className={styles.missionHead}>
        <h3>{name}</h3>
      </div>
      <div className={styles.missionInfo}>
        <p>{description}</p>
      </div>
      <div className={styles.buttons}>
        {mission.reserved ? (
          <button type="button" className={styles.memberBtn}>
            Active Member
          </button>
        ) : (
          <button type="button" className={styles.memberBtn}>
            NOT A MEMBER
          </button>
        )}
      </div>
      <div className={styles.buttons}>
        {mission.reserved ? (
          <button
            onClick={handleJoinMission(id)}
            type="button"
            className={styles.joinMissionBtn}
          >
            Leave Mission
          </button>
        ) : (
          <button
            onClick={handleJoinMission(id)}
            type="button"
            className={styles.joinMissionBtn}
          >
            Join Mission
          </button>
        )}
      </div>
    </div>
  );
};

export default DisplayMission;
