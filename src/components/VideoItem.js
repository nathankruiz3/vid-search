import React from "react";
import "./styles/VideoItem.css";

const VideoItem = (props) => {
  return (
    <div
      className="item video-item"
      onClick={() => props.onVideoSelect(props.video)}
    >
      <img
        className="ui image small"
        src={props.video.snippet.thumbnails.medium.url}
        alt=""
      />
      <div className="content">
        <div className="header">{props.video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
