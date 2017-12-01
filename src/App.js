import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Column, Tile, Add } from './components';

class App extends Component {
	constructor () {
		super ();

		this.state = {
			tiles: {}
		};

		// tiles = { 'joe': {column: 1, content: 'joe'}}

		this.handleArrow = this.handleArrow.bind(this);
		this.handleAdd = this.handleAdd.bind(this);
	}

	handleArrow (direction) {
		return function (e) {
			console.log(direction);
		}
	}

	handleAdd () {
		const input = window.prompt('Enter your tile context');
		const newState = Object.assign({}, this.state.tiles);
		newState[input] = {
			column: , //need column here
			content: input
		}
		this.setState({ tiles:  newState });
	}

  render() {
    return (
      <div className="App">
			<Column name={'Column 1'} color={'#8e6e95'} handleArrow={this.handleArrow} handleAdd={this.handleAdd} >
				{/* iterate over tile object, if column value matches this column (1), return */}
			</Column>
			<Column name={'Column 2'} color={'#39a59c'} handleArrow={this.handleArrow} handleAdd={this.handleAdd} />
			<Column name={'Column 3'} color={'#344759'} handleArrow={this.handleArrow} handleAdd={this.handleAdd} />
			<Column name={'Column 4'} color={'#e8741e'} handleArrow={this.handleArrow} handleAdd={this.handleAdd} />
      </div>
    );
  }
}

export default App;
