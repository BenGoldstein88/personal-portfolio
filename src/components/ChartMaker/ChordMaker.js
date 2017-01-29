import React from 'react';

export default class ChordMaker extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

    }

    this.findMajorChord = this.findMajorChord.bind(this);
    this.flatNote = this.flatNote.bind(this);
    this.sharpNote = this.sharpNote.bind(this);
    this.makeMinorChord = this.makeMinorChord.bind(this);
    this.makeAugmentedChord = this.makeAugmentedChord.bind(this);
    this.makeDiminishedChord = this.makeDiminishedChord.bind(this);
    this.addMajorSevenToChord = this.addMajorSevenToChord.bind(this);
    this.addDominantSevenToChord = this.addDominantSevenToChord.bind(this);
    this.addDiminishedSevenToChord = this.addDiminishedSevenToChord.bind(this);
    this.addNineToChord = this.addNineToChord.bind(this);
    this.addSixToChord = this.addSixToChord.bind(this);
  }

  flatNote(note) {
  	var flatNote;
  	if(note.length === 1 || note[note.length-1]==='b') {
  		flatNote = note + 'b'
  	} else {
  		flatNote = note.substring(0,1);
  	}
  	return flatNote;

  }

  sharpNote(note) {
  	var sharpNote;
  	if(note.length === 1) {
  		sharpNote = note + '#'
  	} else if(note[note.length-1]==='#'){
  		sharpNote = note.substring(0,1) + '*';
  	} else {
  		sharpNote = note.substring(0,1);
  	}
  	return sharpNote;

  }

  makeMinorChord(majorChord) {
  	var majorChordArray = majorChord.split(' ');
  	var third = majorChordArray[1];
  	var flatThird = this.flatNote(third);
  	majorChordArray[1] = flatThird;
  	var minorChord = majorChordArray.join(' ');
  	return minorChord;

  }

  makeAugmentedChord(majorChord) {
  	var majorChordArray = majorChord.split(' ');
  	var fifth = majorChordArray[2];
  	var sharpFifth = this.sharpNote(fifth);
  	majorChordArray[2] = sharpFifth;
  	var augmentedChord = majorChordArray.join(' ');
  	return augmentedChord;

  }

  makeDiminishedChord(majorChord) {
  	var majorChordArray = majorChord.split(' ');
  	var fifth = majorChordArray[2];
  	var flatFifth = this.flatNote(fifth);
  	majorChordArray[2] = flatFifth;
  	var diminishedChord = majorChordArray.join(' ');
  	return diminishedChord;

  }

  addMajorSevenToChord(chord) {

  }

  addDominantSevenToChord(chord) {

  }

  addDiminishedSevenToChord(chord) {

  }

  addNineToChord(chord) {

  }

  addSixToChord(chord) {

  }

  findMajorChord(root) {
  	var majorChord;
  	switch(root) {
  		case: 'C'
  			majorChord = 'C E G';
  			break;
  		case: 'C#'
  			majorChord = 'C# E# G#';
  			break
  		case: 'Db'
  			majorChord = 'Db F Ab';
  			break;
  		case: 'D'
  			majorChord = 'D F# A';
  			break;
  		case: 'D#'
  			majorChord = 'D# F* A#';
  			break
  		case: 'E'
  			majorChord = 'E G# B';
  			break;
  		case: 'F'
  			majorChord = 'F A C';
  			break;
  		case: 'F#'
  			majorChord = 'F# A# C#';
  			break;
  		case 'Gb'
  			majorChord = 'Gb Bb Dd'
  			break;
  		case: 'G'
  			majorChord = 'G B D';
  			break;
  		case: 'G#'
  			majorChord = 'G# B# D#';
  			break;
  		case: 'Ab'
  			majorChord = 'Ab C Eb';
  			break;
  		case: 'A'
  			majorChord = 'A C# E';
  			break;
  		case: 'A#'
  			majorChord = 'A# C* E#';
  			break;
  		case: 'Bb'
  			majorChord = 'Bb D F';
  			break;
  		case: 'B'
  			majorChord = 'B D# F#';
  			break;
  		default:
  			majorChord = '?';
  	}
  	return majorChord;
  }



  render() {
    return (
      <div></div>
    );
  }
}
