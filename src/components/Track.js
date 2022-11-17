import React from 'https://cdn.skypack.dev/react';

export default class Track extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<tr className="Track">
				<td>I'm a track</td>
			</tr>
		)
	}
}