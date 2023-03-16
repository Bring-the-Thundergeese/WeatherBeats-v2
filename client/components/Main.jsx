import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Window from './Window';
import InitialZip from './InitialZip';

export default function Main() {

  const hasEntered = useSelector((state) => state.updater.entered);


  useEffect(() => {
    console.log(hasEntered);    

  }, []);


  //Swap between InitialZip or Window
  return (
    <div>
      {(hasEntered === false) ? <InitialZip /> : <Window />}
    </div>
  );
}

// On page render, we will have access to a JSON object from Spotify
// On page load, we can send a Post request to our Database with the username of the persom
// On Zip Code Use Effect Fire
