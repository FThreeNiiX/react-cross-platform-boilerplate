import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../actions/actions';
import Footer from './footer';
import SwipeableViews from 'react-swipeable-views';

@connect((state) => ({
	counter: state.counter,
	heading: state.heading
}), (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
})

export default class App extends Component {
	render() {
		const { heading, counter } = this.props;
		const { changeHeading, incrementCounter, decrementCounter } = this.props.actions;
		const styles = {
			slide: {
				padding: 15,
				minHeight: 100,
				color: '#fff',
				height:'100%'
			},
			slide1: {
				padding: 15,
				background: '#FEA900',
			},
			slide2: {
				padding: 15,
				background: '#B3DC4A',
			},
			slide3: {
				padding: 15,
				background: '#6AC0FF',
			},
		};
		return (
			<SwipeableViews>
				<div style={Object.assign({}, styles.slide, styles.slide1)}>
					<h1 onClick={changeHeading}>{heading}</h1>
					<button onClick={incrementCounter}>+</button>
					<h2>{counter}</h2>
					<button onClick={decrementCounter}>-</button>
					<Footer/>
				</div>
				<div style={Object.assign({}, styles.slide, styles.slide2)}>
					<h1 onClick={changeHeading}>{heading}</h1>
					<button onClick={incrementCounter}>+</button>
					<h2>{counter}</h2>
					<button onClick={decrementCounter}>-</button>
					<Footer/>
				</div>
				<div style={Object.assign({}, styles.slide, styles.slide3)}>
					<h1 onClick={changeHeading}>{heading}</h1>
					<button onClick={incrementCounter}>+</button>
					<h2>{counter}</h2>
					<button onClick={decrementCounter}>-</button>
					<Footer/>
				</div>
			</SwipeableViews>
		)
	}
}
