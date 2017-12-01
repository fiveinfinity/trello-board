import React, { Component } from 'react';

export class Tile extends Component {
	constructor() {
		super();

	}

	render () {
		return (
			<div className="tile-container">
				<div className="left" onClick={this.props.handleArrow('left')}>left</div>
				{this.props.content}
				<div className="right" onClick={this.props.handleArrow('right')}>right</div>
			</div>
		);
	}
}