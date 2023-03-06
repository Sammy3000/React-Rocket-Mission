import React from 'react';
import styles from '../styles/Rockets.module.css';

function Rockets() {
  return (
    <div className={styles.rocketContainer}>
      <img
        src=""
        alt="rocket avatar"
        className={styles.rocketLeft}
      />
      <div className={styles.rocketRight}>
        <h2 className={styles.heading}>Falcon 1</h2>
        <p className={styles.description}>
          <span className={styles.reservedSpan}>
            <button
              type="button"
              className={styles.reservedSpanBtn}
            >
              Reserved
            </button>
          </span>
          Fog everywhere. Fog up the river, where it flows among green aits and
          meadows; fog down the river, where it rolls deified among the tiers of
          shipping and the waterside pollutions of a great (and dirty) city. Fog
          on the Essex marshes, fog on the Kentish heights. Fog creeping into
          the cabooses of collier-brigs; fog lying out on the yards and hovering
          in the rigging of great ships; fog drooping on the gunwales of barges
          and small boats. Fog in the eyes and throats of ancient Greenwich
          pensioners, wheezing by the firesides of their wards; fog in the stem
          and bowl of the afternoon pipe of the wrathful skipper, down in his
          close cabin; fog cruelly pinching the toes and fingers of his
          shivering little apprentice boy on deck. Chance people on the bridges
          peeping over the parapets into a nether sky of fog, with fog all round
          them, as if they were up in a balloon and hanging in the misty clouds.
        </p>

        <button
          type="button"
          className={styles.reserveRocketBtn}
        >
          Reserve Rocket
        </button>
      </div>
    </div>
  );
}

export default Rockets;
