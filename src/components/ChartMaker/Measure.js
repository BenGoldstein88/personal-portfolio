import React from 'react';
import Beat from './Beat';
export default class Measure extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
    	beats: [],
    	beatsPerMeasure: 4
    }

  }

  componentWillMount() {
    if(this.state.beats.length < 1) {
      this.populateBeats();
    }
  	// var beats = [];
  	// for(var i = 0; i < this.state.beatsPerMeasure; i++) {
  	// 	var beat = <Beat key={i} beatNumber={i} measureNumber={this.props.measureNumber} sectionNumber={this.props.sectionNumber} markAsSelected={this.props.markAsSelected} selectedBeatID={this.props.selectedBeatID} getSelectedBeatID={this.props.getSelectedBeatID }/>
  	// 	beats.push(beat);
  	// }
  	// this.setState({
  	// 	beats: beats
  	// })
  }

  populateBeats() {
    this.setState({
      beats: [0, 1, 2, 3]
    })
  }



  render() {
    var beats = this.state.beats;
    var beatsToRender = [];
    for(var i = 0; i < beats.length; i++) {
      var beat = <Beat key={i} beatNumber={i} measureNumber={this.props.measureNumber} sectionNumber={this.props.sectionNumber} markAsSelected={this.props.markAsSelected} selectedBeatID={this.props.selectedBeatID} getSelectedBeatID={this.props.getSelectedBeatID }/>
      beatsToRender.push(beat);
    }
    return (
      <div className={'measure'}>
      	{beatsToRender}
      </div>
    );
  }
}
