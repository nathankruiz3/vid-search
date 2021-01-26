import React from "react";

const VideoDetail = (props) => {
  return props.selectedVideo ? (
    <div style={{ padding: "0px 20px 0px 0px" }} className="ui container">
      <div className="ui embed">
        <iframe
          title={props.selectedVideo.snippet.title}
          src={`https://www.youtube.com/embed/${props.selectedVideo.id.videoId}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="ui segment">
        <h4 className="ui header">{props.selectedVideo.snippet.title}</h4>
        <p>{props.selectedVideo.snippet.description}</p>
      </div>
    </div>
  ) : null;
};

export default VideoDetail;
