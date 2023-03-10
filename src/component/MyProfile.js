import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { myReservedRockets } from '../features/rockets/rocketsSlice';
import { myReservedMissions } from '../features/missions/missionSlice';
import styles from '../styles/MyProfile.module.css';

function MyProfile() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.rockets.status);
  const reserved = useSelector((state) => state.rockets.reserved);
  const reservedMission = useSelector((store) => store.missions.reserved);

  useEffect(() => {
    dispatch(myReservedRockets());
    dispatch(myReservedMissions());
  }, [status, dispatch]);

  let renderReservedRockets = '';
  let renderReservedMissions = '';

  if (reserved.length) {
    renderReservedRockets = reserved.map((data) => (
      <li key={data.rocket_id}>
        <span>{data.rocket_name}</span>
      </li>
    ));
  }
  if (reservedMission.length) {
    renderReservedMissions = reservedMission.map((mision) => (
      <li key={mision.mission_id}>
        <span>{mision.mission_name}</span>
      </li>
    ));
  }

  return (
    <div className={styles.mainProfile}>
      <div className={styles.container}>
        <h1>Reserved Rockets</h1>
        <ul>{renderReservedRockets}</ul>
      </div>
      <div className={styles.container}>
        <h1>Reserved Missions</h1>
        <ul>{renderReservedMissions}</ul>
      </div>
    </div>
  );
}

export default MyProfile;
