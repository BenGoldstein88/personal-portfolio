import React from 'react';

export default class BenHoverButton extends React.Component {


	constructor(props) {
		super(props);

		this.state = {
			hover: false,
			style: {
				fontSize: '1em'
			}
		}

		this.handleMouseOver = this.handleMouseOver.bind(this)

		this.handleMouseOut = this.handleMouseOut.bind(this)
	}

	handleMouseOver(e) {
		e.preventDefault();
		this.setState({
			style: {
				fontSize: '2em'
			}
		})
	}

	handleMouseOut(e) {
		e.preventDefault();
		this.setState({
			style: {
				textSize: '1em'
			}
		})		
	}

	render() {

		var style = Object.assign({}, this.props.topNavStyles.home, this.state.style)
		return (
			<div onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} >
			<button name="home" style={style} onClick={this.props.onNavButtonClick} className="pt-navbar-heading pt-button pt-minimal">
			Ben Goldstein
			</button>
			</div>
			);
	}
}
