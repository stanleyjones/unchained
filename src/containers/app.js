import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import ModeSwitcher from '../components/ModeSwitcher';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import * as TodoActions from '../actions/todos';
import {WORK, PLAN} from '../constants/Modes';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {mode: WORK};
	}

	render() {
		const {todos, actions} = this.props;
		return (
			<div>
				<ModeSwitcher modes={[WORK, PLAN]} changeMode={this.handleModeChange.bind(this)} />
				<h1>{this.state.mode}</h1>
				<Header addTodo={actions.addTodo} />
				<MainSection todos={todos} actions={actions} />
			</div>
		);
	}

	handleModeChange(mode) {
		this.setState({mode});
	}
}

App.propTypes = {
	todos: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
	return {
		todos: state.todos
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(TodoActions, dispatch)
	};
}

export default App;

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
