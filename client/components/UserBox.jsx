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
        <p>
          Welcome {`${username}`}
          !
        </p>
        <button type="button" onClick={() => logOut()}>Log Out</button>
    </div>
  );
}
