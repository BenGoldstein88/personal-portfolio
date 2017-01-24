import React from 'react';

export default class PoggleCard extends React.Component {

  constructor(props) {
    super(props);
  }

  handleClick(e) {
  	e.preventDefault();

  	window.open("https://poggle.herokuapp.com")
  }

  render() {
    return (
      <div onClick={this.handleClick} className={'project-card poggle-card pt-card pt-interactive pt-elevation-2'} style={{borderRadius: '15%'}}>
      	POGGLE
      </div>
    );
  }
}
