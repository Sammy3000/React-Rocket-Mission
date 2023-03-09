import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reserveRocket } from '../features/rockets/rocketsSlice';
import styles from '../styles/Rockets.module.css';

function Rockets() {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rockets);
  const status = useSelector((state) => state.rockets.status);
  const error = useSelector((state) => state.rockets.error);

  function displayReservationText(currentState) {
    return currentState ? 'Cancel Reservation' : 'Reserve Rockets';
  }

  function handleReserveRocket(id) {
    dispatch(reserveRocket(id));
  }

  if (status === 'loading') {
    return <h1>Loading...</h1>;
  }

  if (status === 'failed') {
    return <div>{error}</div>;
  }

  return (
    <>
      {rockets.map((rocket) => (
        <div
          className={styles.rocketContainer}
          key={rocket.rocket_id}
        >
          <img
            src={rocket.flickr_images[0]}
            alt="rocket avatar"
            className={styles.rocketLeft}
          />
          <div className={styles.rocketRight}>
            <h2 className={styles.heading}>{rocket.rocket_name}</h2>
            <p className={styles.description}>
              {rocket.reserved && (
                <span className={styles.reservedSpan}>
                  <button
                    type="button"
                    className={styles.reservedSpanBtn}
                  >
                    Reserved
                  </button>
                </span>
              )}
              {rocket.description}
            </p>

            <button
              onClick={() => handleReserveRocket(rocket.id)}
              type="button"
              className={styles.reserveRocketBtn}
            >
              {displayReservationText(rocket.reserved)}
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default Rockets;
