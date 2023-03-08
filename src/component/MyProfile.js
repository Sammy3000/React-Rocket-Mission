import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { myReservedRockets } from '../features/rockets/rocketsSlice';

function MyProfile() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.rockets.status);
  const reserved = useSelector((state) => state.rockets.reserved);

  useEffect(() => {
    dispatch(myReservedRockets());
  }, [status, dispatch]);

  let renderReservedRockets = '';

  if (reserved.length) {
    renderReservedRockets = reserved.map((data) => (
      <li key={data.rocket_id}>
        <span>{data.rocket_name}</span>
      </li>
    ));
  }
  return (
    <div>
      <h1>Reserved Rockets</h1>
      <ul>{renderReservedRockets}</ul>
    </div>
  );
}

export default MyProfile;
