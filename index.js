import { Component } from 'react';
import {
	Keyboard,
} from 'react-native';

const events = ['WillShow', 'WillHide', 'DidShow', 'DidHide', 'WillChangeFrame', 'DidChangeFrame'];

class KeyboardListener extends Component {

	listeners = []

	componentDidMount() {
		events.forEach(event => {
			const keyProp = `on${event}`;
			if (this.props[keyProp]) {
				this.listeners.push(Keyboard.addListener(
					`keyboard${event}`, this.props[keyProp],
				));
			}
		});
	}
	componentWillUnmount() {
		this.listeners.forEach(listener => listener.remove());
		this.listener = [];
	}

	render() {
		return false;
	}
}

export default KeyboardListener;
