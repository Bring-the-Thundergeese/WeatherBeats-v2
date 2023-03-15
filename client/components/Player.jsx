import React from 'react';
import UserBox from './UserBox';
import Zipcode from './Zipcode';
import Icon from './Icon';


function Player({ token, playlistUri }) {
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
      src={`https://open.spotify.com/embed/playlist/${playlistUri}?access_token=${token}&autoplay=true`}
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
