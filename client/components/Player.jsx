import React from 'react';
import UserBox from './UserBox';
import Zipcode from './Zipcode';
import Icon from './Icon';
import { updatePlaylist } from '../redux/stateSlice';
import { useSelector, useDispatch } from 'react-redux';

function Player({ token }) {
  const dispatch = useDispatch();

  const playlist = useSelector((state) => state.updater.playlist);
  const weather = useSelector((state) => state.updater.type);

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

  return (
    <div>
      <div className="hero-head">
        <div className="columns">
          <Icon />
          <Zipcode />
          <UserBox />
        </div>
      </div>
      <iframe
        src={`https://open.spotify.com/embed/playlist/${playlist}?access_token=${token}&autoplay=true`}
        title="Spotify Player"
        width="300"
        height="380"
        allowtransparency="true"
        allow="encrypted-media"
      />
    </div>
  );
}

// https://open.spotify.com/playlist/37i9dQZF1DX889U0CL85jj?si=491b69f1290a4f93
export default Player;
