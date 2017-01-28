import React from 'react';
import Measure from './Measure';
import MeasureDisplay from './MeasureDisplay';
import SectionName from './SectionName';

export default class Section extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
    	measures: [],
    	name: 'Chorus'
    }

    this.populateMeasures = this.populateMeasures.bind(this);
    this.changeName = this.changeName.bind(this);
  }

  populateMeasures() {
  	var measures = [0, 1, 2, 3, 4, 5, 6, 7];

  	this.setState({
  		measures: measures
  	})
  }

  changeName(name) {
  	this.setState({
  		name: name
  	})
  }


  componentWillMount() {
  	if(this.state.measures.length < 1) {
  		this.populateMeasures();
  	}
  	
  }

  render() {
  	var measures = this.state.measures;
  	var measuresToRender = [];
  	for(var i in measures) {

		var measure = <Measure key={i} measureNumber={i} sectionNumber={this.props.sectionNumber} markAsSelected={this.props.markAsSelected} selectedBeatID={this.props.selectedBeatID} getSelectedBeatID={this.props.getSelectedBeatID}/>
		measuresToRender.push(measure);
	}

 
    return (
      <div className={'section'}>
      	<SectionName name={this.state.name} changeName={this.changeName}/>
      	{measuresToRender}
      </div>
    );
  }
}

