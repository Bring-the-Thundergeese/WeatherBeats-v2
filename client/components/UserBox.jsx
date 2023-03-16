import React from 'react';
import { updateAccess, updateToken, updateUser } from '../redux/stateSlice';
import { useSelector, useDispatch } from 'react-redux';

export default function UserBox({ token }) {
  const dispatch = useDispatch();

  //Gives this component access to Spotofy username from the Store 
  const username = useSelector((state) => state.updater.username);

  //logout function
  function logOut() {
    console.log("Logging you out!")
    dispatch(updateAccess(false));

  }

  //renders a Welcome [username] message on the top right of the nav bar 
  return (
    <div className="column">
      <div className="box is-size-4 has-text-white is-full-height">
        <p>
          Welcome {`${username}`}
          !
        </p>
        <button type="button" className="button is-primary is-small" onClick={() => logOut()}>Log Out</button>
      </div>
    </div>
  );
}
