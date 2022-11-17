import React from "https://cdn.skypack.dev/react";
import Album from "./Album.js";

export default class AlbumList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const albums = this.props.albums.map((a) => (
      <li key={a.album_id}>{a.name}</li>
    ));

    return (
      <div className="AlbumList">
        Albums ({this.props.albums.length})
        <ul>
          {albums}
        </ul>
      </div>
    );
  }
}
