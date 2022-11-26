import React from 'https://cdn.skypack.dev/react';

export default class TrackList extends React.Component {
  constructor(props) {
    super(props);
  }

  playTrack(track) {
    console.log(`TrackList: I should play track ${track.track_id}`);
    this.props.onTrackClicked(track);
  }



  filterTracks(tracks, searchString) {
    // todo: strip space from searchString, may want to do in App?
    if (searchString === "") {
      return tracks;
    }

    const searchStringLower = searchString.toLowerCase();

    return tracks.filter((track) =>
      track.name.toLowerCase().includes(searchStringLower)
    )
  }

  render() {
    const filteredTracks = this.filterTracks(this.props.tracks, this.props.searchString);

    const tracks = filteredTracks.map((t) => (
      <tr
        key={t.track_id}
        onClick={(e) => this.playTrack(t, e)}
      >
        <td>{t.name}</td>
        <td>
          {t.artist}
        </td>
      </tr>
    ));

    return (
      <div className="TrackList">
        <table>
          <tbody>
            {tracks}
          </tbody>
        </table>
      </div>
    )
  }
}