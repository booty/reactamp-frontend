import React from 'https://cdn.skypack.dev/react';

export default class StatusBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="StatusBar">
        {this.props.library.albums.length} albums,&nbsp; 
        {this.props.library.tracks.length} tracks
      </div>
    );
  }
}