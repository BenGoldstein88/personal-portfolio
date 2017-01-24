import React from 'react';

export default class GitHubProfileCard extends React.Component {

  constructor(props) {
    super(props);
  }

  handleCLick(e) {
    e.preventDefault();

    window.open("https://www.github.com/BenGoldstein88")

  }

  render() {
  	var darkClass = ""
    if(this.props.darkStatus===true) {
      darkClass = " pt-dark"
    }
    return (
    	
      <div style={{
        borderRadius: '15%'
      }} onClick={this.handleCLick} className={"pt-card pt-elevation-2 pt-interactive home-card github-card" + darkClass} >
      </div>
    );
  }
}
      	// <img src={"../assets/png/octocat.png"} />
