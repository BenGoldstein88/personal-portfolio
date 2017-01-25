import React from 'react';
import Hangman from './Hangman';

export default class HangmanCard extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={' hangman-card '}>
      	<Hangman />
      </div>
    );
  }
}
