import React from 'react';
import Section from './Section';
import SectionDisplay from './SectionDisplay';
import AddSectionButton from './AddSectionButton';

export default class ChartMaker extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
    	sections: [],
      selectedBeatID: 'x',
      reset: false
    }

    this.addSection = this.addSection.bind(this);
    this.removeSection = this.removeSection.bind(this);
    this.markAsSelected = this.markAsSelected.bind(this);
    this.getSelectedBeatID = this.getSelectedBeatID.bind(this);
    this.toggleReset = this.toggleReset.bind(this);
    this.resetClicked = this.resetClicked.bind(this);
  }

  addSection(name = 'chorus', numMeasures = 8) {
    var sections = this.state.sections;

    var section = {
      name: name,
      numMeasures: numMeasures
    }

    sections.push(section);

    this.setState({
      sections: sections
    })

  }

  removeSection(name) {

  }


  markAsSelected(beatID) {
    console.log("marking beat with ID: " + beatID);

    this.setState({
      selectedBeatID: beatID
    })

  }

  getSelectedBeatID() {
    return this.state.selectedBeatID;
  }

  toggleReset() {
    this.setState({
      reset: !this.state.reset
    })
  }

  resetClicked() {
    this.setState({
      selectedBeatID: '-1'
    })
  }



  render() {
    var sections = this.state.sections;
    var sectionsToRender = [];

    for(var i = 0; i < sections.length; i++) {
     var section = <Section key={i} sectionNumber={i} removeSection={this.removeSection} markAsSelected={this.markAsSelected} selectedBeatID={this.state.selectedBeatID} getSelectedBeatID={this.getSelectedBeatID} reset={this.state.reset} />
      sectionsToRender.push(section);
    }

    console.log("sectionsToRender: ", sectionsToRender);

    return (
      <div onClick={this.resetClicked} className={'chart-maker'} >
      	<AddSectionButton addSection={this.addSection}/>
      	<SectionDisplay sections={sectionsToRender} />
      </div>
    );
  }
}
