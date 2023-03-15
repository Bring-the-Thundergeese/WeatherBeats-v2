import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function UserBox({ user }) {

  return (
    <div className="column">
      <div className="box is-size-4 has-text-white is-full-height">
        <p>
          Welcome
          {' '}
          Adam
          !
        </p>
        <p>adam.liang@alumni.stonybrook.edu</p>
        <button className="button is-primary is-small">Log Out</button>
      </div>
    </div>
  );
}
