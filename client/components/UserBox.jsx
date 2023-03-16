import React from 'react';
import { useSelector } from 'react-redux';

export default function UserBox() {
  //Gives this component access to Spotofy username from the Store 
  const username = useSelector((state) => state.updater.username);

  //renders a Welcome [username] message on the top right of the nav bar 
  return (
    <div className="">
        <p>Welcome {`${username}`}!</p>
        <button type="button" className="">Log Out</button>
    </div>
  );
}
