import React from 'react';
import UserBox from './UserBox';
import Zipcode from './Zipcode';
import Icon from './Icon';
import { updatePlaylist } from '../redux/stateSlice';
import { useSelector, useDispatch } from 'react-redux';


//token is passed down as props from Main
function Player({ token }) {
  const dispatch = useDispatch();

  //Give this component access to playlsit and (weather)type from the Store
  const playlist = useSelector((state) => state.updater.playlist);
  const weather = useSelector((state) => state.updater.type);

  //Change the playlist based upon the weather pattern in state from OpenWeather API request 
  if (weather === 'rain') {
    dispatch(updatePlaylist('37i9dQZF1EIelivQWnxTte'));
  }
  else if (weather === 'clouds') {
    dispatch(updatePlaylist('37i9dQZF1EIfv2exTKzl3M'));
  }
  else if (weather === 'clear') {
    dispatch(updatePlaylist('37i9dQZF1DWYBO1MoTDhZI'));
  }
  else if (weather === 'snow') {
    dispatch(updatePlaylist('4raqLXnmb8WYkjfed9olAR'));
  }

  //renders the Logo, Zipcode toolbar, and UserInformation on the top navbar 
  //renders embedded Spotify Player in the Main component 
  return (
    <div className="zipcodeFeatureContainer">
      <Icon />
      <Zipcode />
      <UserBox />
      <div className='spotifyPlayer'>
        <iframe
          src={`https://open.spotify.com/embed/playlist/${playlist}?access_token=${token}&autoplay=true`}
          title="Spotify Player"
          width="100%"
          height="380"
          frameBorder='0'
          allowtransparency="true"
          allow="encrypted-media, fullscreen, picture-in-picture"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default Player;
