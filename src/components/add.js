import React, { Component } from 'react';

export class Add extends Component {
	constructor () {
		super();
	}

	render () {
		return (
			<div onClick={this.props.handleAdd}>Add a Card</div>
		);
	}
}