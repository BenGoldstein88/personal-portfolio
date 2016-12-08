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
  	var darkClass = ""
  	var imgURL = "../assets/png/bandcamp.png"
    if(this.props.darkStatus===true) {
      darkClass = " pt-dark";
      imgURL = '../assets/png/bandcampdark.png'
    }
    return (
    	
      <div style={{
        width: '80%',
        margin: '0 auto',
        marginTop: '10%',
        textAlign: 'center'
      }} onClick={this.handleCLick} className={"pt-card pt-elevation-2 pt-interactive" + darkClass} >
      	<img style={{margin: '0 auto', width: '80%'}}src={imgURL} />
      </div>
    );
  }
}
