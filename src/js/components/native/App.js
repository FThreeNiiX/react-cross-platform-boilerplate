import React, {Component, StyleSheet, Text, View, Platform}  from 'react-native';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as Actions from '../../actions/actions';
import Footer from './footer';
import SwipeableViews from 'react-swipeable-views/lib/index.native.animated';

@connect((state) => ({
	counter: state.counter,
	heading: state.heading
}), (dispatch) => {
	return {
		actions: bindActionCreators(Actions, dispatch)
	}
})
export default class ApplicationNative extends Component {

	renderPlatformSpecific() {
		const {OS} = Platform;
		return OS === 'ios' ? (<Text>iOS Specific Component</Text>) : (<Text>Android Specific Component</Text>)
	}

	render() {
		const {changeHeading, incrementCounter, decrementCounter} = this.props.actions;
		const {heading, counter} = this.props;
		return (
			<SwipeableViews style={styles.slideContainer}>
				<View style={[styles.slide, styles.slide1]}>
					{this.renderPlatformSpecific()}
					<Text onPress={changeHeading} style={styles.welcome}>{heading}</Text>
					<Text onPress={incrementCounter} style={styles.welcome}>+</Text>
					<Text style={styles.counter}>{counter}</Text>
					<Text onPress={decrementCounter} style={styles.welcome}>-</Text>
					<Footer style={styles.default}/>
				</View>
				<View style={[styles.slide, styles.slide2]}>
					{this.renderPlatformSpecific()}
					<Text onPress={changeHeading} style={styles.welcome}>{heading}</Text>
					<Text onPress={incrementCounter} style={styles.welcome}>+</Text>
					<Text style={styles.counter}>{counter}</Text>
					<Text onPress={decrementCounter} style={styles.welcome}>-</Text>
					<Footer style={styles.default}/>
				</View>
				<View style={[styles.slide, styles.slide3]}>
					{this.renderPlatformSpecific()}
					<Text onPress={changeHeading} style={styles.welcome}>{heading}</Text>
					<Text onPress={incrementCounter} style={styles.welcome}>+</Text>
					<Text style={styles.counter}>{counter}</Text>
					<Text onPress={decrementCounter} style={styles.welcome}>-</Text>
					<Footer style={styles.default}/>
				</View>
			</SwipeableViews>
		)
	};
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	counter: {
		fontSize: 30,
		top: 10,
		textAlign: 'center',
		fontWeight: 'bold'
	},
	welcome: {
		fontSize: 40,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
	slideContainer: {
		height: 100,
	},
	slide: {
		flex: 1,
		padding: 15,
		height: 100,
	},
	slide1: {
		backgroundColor: '#FEA900',
	},
	slide2: {
		backgroundColor: '#B3DC4A',
	},
	slide3: {
		backgroundColor: '#6AC0FF',
	},
	text: {
		color: '#fff',
		fontSize: 16,
	},
});
