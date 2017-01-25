import React from 'react';

export default class BandCampCard extends React.Component {

  constructor(props) {
    super(props);
  }

  handleCLick(e) {
    e.preventDefault();

    window.open("https://bengoldstein.bandcamp.com")

  }

  render() {
  	var darkClass = " light-class "
  	var imgURL = "../assets/png/bandcamp.png"
    if(this.props.darkStatus===true) {
      darkClass = " dark-class";
      imgURL = '../assets/png/bandcampdark.png'
    }
    return (
    	
      <div style={{
        borderRadius: '15%'
      }} onClick={this.handleCLick} className={" pt-elevation-2 pt-interactive home-card bandcamp-card " + darkClass} >
      	<img style={{margin: '0 auto', width: '80%'}}src={imgURL} />
      </div>
    );
  }
}
