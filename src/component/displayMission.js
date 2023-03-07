import React from 'react';
import styles from '../styles/DisplayMission.module.css';

const DisplayMission = ({ name, description }) => (
  <div className={styles.missionItems}>
    <div className={styles.missionHead}>
      <h3>{name}</h3>
    </div>
    <div className={styles.missionInfo}>
      <p>{description}</p>
    </div>
    <div className={styles.buttons}>
      <button type="button" className={styles.memberBtn}>
        NOT A MEMBER
      </button>
    </div>
    <div className={styles.buttons}>
      <button type="button" className={styles.joinMissionBtn}>
        Join Mission
      </button>
    </div>
  </div>
);

export default DisplayMission;
