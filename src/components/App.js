import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  handleTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    this.setState({ videos: response.data.items, selectedVideo: null });
    console.log(this.state.videos);
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
    console.log(video);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.handleTermSubmit} />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <VideoDetail selectedVideo={this.state.selectedVideo} />
          <VideoList
            videos={this.state.videos}
            onVideoSelect={this.onVideoSelect}
          />
        </div>
      </div>
    );
  }
}

export default App;
