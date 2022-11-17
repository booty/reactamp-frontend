import React from 'https://cdn.skypack.dev/react';

export default class TrackList extends React.Component {
  constructor(props) {
    super(props);
  }

  playTrack(track_id) {
    console.log(`TrackList: I should play track ${track_id}`);
    this.props.onTrackClicked(track_id);
  }

  render() {
    const tracks = this.props.tracks.map((t) => (
      <tr
        key={t.track_id}
        onClick={(e) => this.playTrack(t.track_id, e)}
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