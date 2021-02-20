import React from "react";
import ReactPlayer from "react-player";
import './player.css';

const Player = ({ url, data }) => (
    <div className="player-wrapper">
        <ReactPlayer
            url={url}
            className="react-player"
            playing
            width="100%"
            height="100%"
            controls={true}
            {...data}
        />
    </div>
);

export default Player;