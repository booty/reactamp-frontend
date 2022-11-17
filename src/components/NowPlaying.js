import React from 'https://cdn.skypack.dev/react';

export default class NowPlaying extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let label = null;

    if (this.props.current_track) {
      label = (
        this.props.current_track.name
      )
    }

    return(
      <div className="NowPlaying">
        Now Playing: {label}
      </div>
    );
  }
}