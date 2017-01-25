import React from 'react';
import Gallows from './Gallows';
import LetterDisplay from './LetterDisplay';
import PlayerGuess from './PlayerGuess';

export default class Hangman extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
    	words: ['test', 'super', 'quagmire', 'porous'],
    	currentWord: '',
    	revealedLetters: [],
    	guessedLetters: [],
    	numWrongGuesses: 0,
    	reset: false
    }
    this.handlePlayerGuess = this.handlePlayerGuess.bind(this);
    this.colorLuminance = this.colorLuminance.bind(this);
  }

  componentWillMount() {
  	var randomWord = this.state.words[Math.floor(Math.random()*this.state.words.length)];
  	var revealedLetters = new Array(randomWord.length).fill('')

  	this.setState({
  		currentWord: randomWord,
  		revealedLetters: revealedLetters
  	})
  }

  handlePlayerGuess(letter) {
    if(this.state.guessedLetters.includes(letter)) {
      console.log("Already guessed that letter!");
      return false;

    }

    var currentWordArray = this.state.currentWord.split('');
    var indices = [];
    for(var i = 0; i < currentWordArray.length; i++) {
      if (currentWordArray[i] === letter) {
          indices.push(i);
      }
    }
    if(indices.length === 0) {
      console.log("Wrong!")

      return false;
    }

    var guessedLetters = this.state.guessedLetters;

    guessedLetters.push(letter);
    var revealedLetters = this.state.revealedLetters;

    for(var i in indices) {
      revealedLetters[indices[i]] = letter;
    }
    this.setState({
      revealedLetters: revealedLetters,
      guessedLetters: guessedLetters
    })
    return true;

  }

  colorLuminance(hex, lum) {

  // validate hex string
    hex = String(hex).replace(/[^0-9a-f]/gi, '');
    if (hex.length < 6) {
      hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
    }
    lum = lum || 0;

    // convert to decimal and change luminosity
    var rgb = "#", c, i;
    for (i = 0; i < 3; i++) {
      c = parseInt(hex.substr(i*2,2), 16);
      c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
      rgb += ("00"+c).substr(c.length);
    }

    return rgb;
  }

  render() {
    return (
      <div>
      	<Gallows guessedLetters={this.state.guessedLetters} revealedLetters={this.state.revealedLetters} numWrongGuesses={this.state.numWrongGuesses} />
      	<LetterDisplay currentWord={this.state.currentWord} revealedLetters={this.state.revealedLetters} />
      	<PlayerGuess onSubmitLetter={this.handlePlayerGuess} />
      </div>
    );
  }
}
