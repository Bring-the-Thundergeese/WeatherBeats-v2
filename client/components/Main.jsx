import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser, updateToken, updateAccess } from '../redux/stateSlice';
import Logo from '../../public/logo.png';
import Player from './Player';
import Login from './Login';

export default function Main() {
  const dispatch = useDispatch();

  let access = useSelector((state) => state.updater.access);

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
        dispatch(updateToken(token));
        dispatch(updateAccess(true));
        // dispatch(updateAccess(true))
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
  }, []);

  //Login Page and Main Page components are swapped when the access variable changes in state 
  return (
    <div>
      <div className="hero-body">
        <div className="container has-text-centered">

          <div id="player" className="card">
            <div className="card-content">
              <div className="content">
                <div className="field">
                  {(access === false) ? <Login /> : <Player token={token} />}
                  {/* {(!token) ? <Login /> : <Player token={token} />} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-foot" />
    </div>
  );
}

// On page render, we will have access to a JSON object from Spotify
// On page load, we can send a Post request to our Database with the username of the persom
// On Zip Code Use Effect Fire
