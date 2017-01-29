import React from 'react';

export default class ChordInfo extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currentRoot: '',
      currentMajorChord: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.currentRoot !== prevState.currentRoot) {
      this.setState({
        currentMajorChord: this.props.findMajorChord(this.state.currentRoot)
      })
    }
  }

  handleChange(e) {
    e.preventDefault();

    this.setState({
      currentRoot: e.target.value
    })
  }

  render() {
    var currentRoot = this.state.currentRoot;
    var currentMajorChord = this.state.currentMajorChord

    return (
      <div className='chord-info'>
        <input type='text' onChange={this.handleChange} />
        <br/>
        {currentRoot}
        <br/>
        Major: {currentMajorChord}
        <br/>
        Minor: {this.props.makeMinorChord(currentMajorChord)}
        <br/>
        Augmented: {this.props.makeAugmentedChord(currentMajorChord)}
        <br/>
        Diminished: {this.props.makeDiminishedChord(currentMajorChord)}
      	

      </div>
    );
  }
}