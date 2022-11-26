import React from 'https://cdn.skypack.dev/react';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: ""
    };
  }

  searchUpdated(e) {
    const val = e.target.value;
    this.setState({searchString: val});
    this.props.onSearchUpdated(val);
  }

  render() {
    return(
      <div className="Search">
        <input
          type="text"
          value={this.state.searchString}
          onChange={(e) => this.searchUpdated(e)}
        />
      </div>
    );
  }
}