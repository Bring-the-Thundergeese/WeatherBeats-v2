import React from 'react';
import { useSelector } from 'react-redux';

export default function UserBox({ user }) {
  const username = useSelector((state) => state.updater.username);

  return (
    <div className="column">
      <div className="box is-size-4 has-text-white is-full-height">
        <p>
          Welcome {`${username}`}
          !
        </p>
        <button type="button" className="button is-primary is-small">Log Out</button>
      </div>
    </div>
  );
}
