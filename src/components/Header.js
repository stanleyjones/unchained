import React, {PropTypes, Component} from 'react';
import TodoTextInput from './TodoTextInput';

class Header extends Component {
	handleSave(text) {
		console.log('saved!');
		if (text.length) {
			this.props.addTodo(text);
		}
	}

	render() {
		return (
			<header className="header">
				<TodoTextInput newTodo
					onSave={this.handleSave.bind(this)}
					placeholder="What needs to be done?" />
			</header>
		);
	}
}

Header.propTypes = {
	addTodo: PropTypes.func.isRequired
};

export default Header;
