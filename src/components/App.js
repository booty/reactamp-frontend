import React from 'https://cdn.skypack.dev/react';
import { library } from './Library.js';
import Album from './Album.js';
import AlbumList from './AlbumList.js';
import NowPlaying from './NowPlaying.js';
import Search from './Search.js';
import StatusBar from './StatusBar.js';
import Track from './Track.js';
import TrackList from './TrackList.js';

class Player extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="Player">
        <div className="row mainRow">
          <div className="PlayerLeft column">
            <AlbumList albums={this.props.library.albums} />
          </div>
          <div className="PlayerRight column">
            <NowPlaying />
            <Search />
            <TrackList tracks={this.props.library.tracks} />
          </div>
        </div>
        <div className="row bottomRow">
          <div className="PlayerBottom column">
            <StatusBar library={this.props.library} />
          </div>
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  render(){
    return <Player library={library}>Hello World?</Player>;
  }
}

export default App;