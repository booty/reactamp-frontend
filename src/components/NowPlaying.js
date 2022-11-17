import React from 'https://cdn.skypack.dev/react';

export default class NowPlaying extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="NowPlaying">
        Now Playing: {this.props.track_id} ...
      </div>
    );
  }
}