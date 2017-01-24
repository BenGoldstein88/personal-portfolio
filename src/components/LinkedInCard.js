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
  	var darkClass = " light-class "
  	var imgURL = "../assets/png/linkedin.png"
    if(this.props.darkStatus===true) {
      darkClass = " dark-class";
      imgURL = '../assets/png/linkedindark.png'
    }

    return (
    	
      <div style={{
        borderRadius: '15%'
      }} onClick={this.handleCLick} className={" pt-elevation-2 pt-interactive home-card linkedin-card " + darkClass} >
      	<img className={'linkedin-image'} src={imgURL} />
      </div>
    );
  }
}
