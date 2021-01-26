import React from "react";
import VideoItem from "./VideoItem";
import "./styles/VideoList.css";

const VideoList = (props) => {
  const renderedList = props.videos.map((video) => {
    return (
      <VideoItem
        video={video}
        key={video.id.videoId}
        onVideoSelect={props.onVideoSelect}
      />
    );
  });

  return props.videos.length > 0 ? (
    <div className="video-list">
      <div className="ui relaxed divided list">{renderedList}</div>
    </div>
  ) : null;
};

export default VideoList;
