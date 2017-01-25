import React from 'react';

export default class PlayerGuess extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
    	currentGuess: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
  	e.preventDefault();
  	this.setState({
  		currentGuess: e.target.value
  	})
  }

  handleSubmit(e) {
  	e.preventDefault();
  	if(this.state.currentGuess !== '') {
  		this.props.onSubmitLetter(this.state.currentGuess);
  		this.setState({
  			currentGuess: ''
  		})
  	}
  }

  render() {
    return (
      <div>
      	<input type='text' value={this.state.currentGuess} onChange={this.handleChange} className={'hangman-guess-input'} />
      	<button onClick={this.handleSubmit} />
      </div>
    );
  }
}
