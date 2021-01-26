import React from "react";

class SearchBar extends React.Component {
  state = {
    searchTerm: "",
  };

  handleInputChange = (event) => {
    this.setState({ searchTerm: event.target.value });
    console.log(this.state.searchTerm);
  };

  handleFormSubmit = (event) => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.searchTerm);
  };

  render() {
    return (
      <div style={{ marginTop: "10px" }} className="search-bar ui segment">
        <form className="ui form" onSubmit={this.handleFormSubmit}>
          <div style={{ textAlign: "center" }}>
            <label>Video Search</label>
            <input
              placeholder="Enter search term..."
              type="text"
              value={this.state.searchTerm}
              onChange={this.handleInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
