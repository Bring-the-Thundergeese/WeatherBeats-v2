import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updatePlaylist, updateUser } from '../redux/stateSlice';
import Logo from '../../public/logo.png';
import Player from './Player';
import Login from './Login';

export default function Main() {
  const dispatch = useDispatch();
  const [token, setToken] = useState('');

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const response = await fetch('/auth/token', {
          method: 'get',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json();
        const { accessToken } = data;
        setToken(accessToken.trim());
      } catch (error) {
        console.error('Token fetch error: ', error);
      }
    };
    console.log('Current token ', token);

    // fetch userdata
    const fetchUserData = async () => {
      try {
        const response = await fetch('/api/user');
        const data = await response.json();
        console.log('This is the User Data that we need!', data.display_name);
        const name = data.display_name;
        dispatch(updateUser(name));
      } catch (error) {
        console.error('User data fetch error: ', error);
      }
    };
    fetchToken();
    fetchUserData();

    // set playlist based on weather type
    // changePlaylist(weatherType);
  }, [token]);

  return (
    <div className="main">
      {(!token) ? <Login /> : <Player token={token} />}
    </div>     
  );
}

// On page render, we will have access to a JSON object from Spotify
// On page load, we can send a Post request to our Database with the username of the persom
// On Zip Code Use Effect Fire
