import React from 'react';
import LetterTile from './LetterTile';
export default class LetterDisplay extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
  	var numTiles = this.props.currentWord.length;
  	var letterTiles = [];
  	for(var i = 0; i < numTiles; i++) {
  		var letter = this.props.revealedLetters[i] || '';
  		var letterTile = <LetterTile key={i} letter={letter} />
  		letterTiles.push(letterTile);
  	}

    return (
      <div className={'letter-display'}>
      	{letterTiles}
      </div>
    );
  }
}
