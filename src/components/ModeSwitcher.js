import React, {PropTypes, Component} from 'react';

class ModeSwitcher extends Component {
	render() {
		return (
			<nav className="mode">
				{this.props.modes.map((mode, i) =>
					<button key={i}
						className="mode__button"
						onClick={this.props.changeMode.bind(this, mode)}
					>
						{mode}
					</button>
				)}
			</nav>
		);
	}
}

ModeSwitcher.propTypes = {
	changeMode: PropTypes.func.isRequired
};

export default ModeSwitcher;
