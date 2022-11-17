import React from 'https://cdn.skypack.dev/react';

export default class Album extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="Album">I'm an album!</div>;
  }
}