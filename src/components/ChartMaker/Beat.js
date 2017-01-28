import React from 'react';

export default class Beat extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
    	chord: ''
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getBeatID = this.getBeatID.bind(this);
  }




  getBeatID() {
    var beatNumber = this.props.beatNumber;
    var measureNumber = this.props.measureNumber;
    var sectionNumber = this.props.sectionNumber;

    var beatID = "" + sectionNumber + "" + measureNumber + "" + beatNumber;

    return beatID;    
  }

  handleClick(e) {
    // e.preventDefault();
    e.stopPropagation();

    this.props.markAsSelected(this.getBeatID());

  }

  handleKeyPress(e) {
    if(e.key === 'Enter') {
      this.props.markAsSelected('-1');
    }

  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      chord: e.target.value
    })
  }

  render() {
    var thingToDisplay = <p className={'beat-chord'}>{this.state.chord}</p>
    var className = 'beat'

    if(this.props.selectedBeatID === this.getBeatID()) {
      className += ' clicked-beat';
      thingToDisplay = <input ref={'input'} className={'chord-input'} type={'text'} onKeyPress={this.handleKeyPress} placeholder={this.state.chord} autoFocus/>
    } 

    return (
      <div onClick={this.handleClick} onChange={this.handleChange} onKeyPress={this.handleKeyPress} className={className}>
      	{thingToDisplay}
      </div>
    );
  }
}
