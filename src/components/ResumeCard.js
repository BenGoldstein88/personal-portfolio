import React from 'react';

export default class ResumeCard extends React.Component {

  constructor(props) {
    super(props);
  }

  handleCardClick(e) {
  	window.open('../assets/pdf/BGresume.pdf', '_blank', 'fullscreen=yes')
  }

render() {
  var darkClass = ' light-class ';
  if(this.props.darkStatus) {
    darkClass = ' dark-class ';
  }
    return (
      <div className={" pt-elevation-2 pt-interactive resume-card " + darkClass} style={{borderRadius: '15%'}} onClick={this.handleCardClick}>
      	<h1> Resumé </h1>
      	<p >
      		I am a web-developer, software engineer, and professional musician (composition, instruction, production, performance). Please do not hesitate to get in touch if you have in mind a project for me!
      	</p>

      	
      </div>
    );
  }
}
