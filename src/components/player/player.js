import React, { Fragment } from "react";
import ReactPlayer from "react-player";
import './player.css';

const Player = ({ url, data }) => (
    <>
        {url ? (<div className="player-wrapper">
            <ReactPlayer
                url={url}
                className="react-player"
                width="75%"
                height="75%"
                controls={true}
                {...data}
            />
        </div>) : ""}

    </>
);

export default Player;