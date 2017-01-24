import React from 'react';

export default class LinkedInCard extends React.Component {

  constructor(props) {
    super(props);
  }

  handleCLick(e) {
    e.preventDefault();

    window.open("https://www.linkedin.com/in/BenGoldstein88")

  }

  render() {
  	var darkClass = ""
  	var imgURL = "../assets/png/linkedin.png"
    if(this.props.darkStatus===true) {
      darkClass = " pt-dark";
      imgURL = '../assets/png/linkedindark.png'
    }
    return (
    	
      <div style={{
        borderRadius: '15%'
      }} onClick={this.handleCLick} className={"home-card linkedin-card pt-card pt-elevation-2 pt-interactive" + darkClass} >
      	<img style={{margin: '0 auto', width: '80%'}} src={imgURL} />
      </div>
    );
  }
}
