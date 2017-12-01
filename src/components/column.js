import React, { Component } from 'react';
import { Add } from './add';
import { Tile } from './tile';

export class Column extends Component {
	constructor() {
		super();
	}

	render () {
		const { tiles, handleArrow, handleAdd, color, name } = this.props; // tiles is an array, not an object. 

		return (
			<div className="column-container">
			<div className="title-container">
				<div className="title" style={{'background-color': `${color}`}}>{name}</div>
			</div>
				{/* {tiles.map(tile => {
					// CHANGE TILE TO TILE.CONTENT HERE
					return <Tile content={tile.content} handleArrow={handleArrow} />
				})} */}
				<Add handleAdd={handleAdd} />
			</div>
		);
	}
}