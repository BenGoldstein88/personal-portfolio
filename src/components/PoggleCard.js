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
    var darkClass = " light-class "
    if(this.props.darkStatus===true) {
      darkClass = " dark-class "
    }

    return (
      <div onClick={this.handleClick} className={'project-card project-card-effect poggle-card pt-interactive pt-elevation-2' + darkClass} style={{borderRadius: '15%'}}>
      	<h1> Poggle </h1>
        <p className={' project-description '} >
          An online word game not dissimilar to Boggle&trade; built entirely by yours truly. Currently hosted by Heroku.
        </p>
      </div>
    );
  }
}
