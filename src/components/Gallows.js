import React from 'react';

export default class Gallows extends React.Component {


  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      	guessed letters: {this.props.guessedLetters}
      	<br />
      	number wrong guesses: {this.props.numWrongGuesses}
      </div>
    );
  }
}
