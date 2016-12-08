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
        width: '80%',
        margin: '0 auto',
        marginTop: '10%',
        textAlign: 'center'
      }} onClick={this.handleCLick} className={"pt-card pt-elevation-2 pt-interactive" + darkClass} >
      	<img src={"../assets/png/octocat.png"} />
      </div>
    );
  }
}
