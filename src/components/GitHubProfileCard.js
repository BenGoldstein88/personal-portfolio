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
  	var darkClass = " light-class "
    if(this.props.darkStatus===true) {
      darkClass = " dark-class"
    }
    return (
    	
      <div style={{
        borderRadius: '15%'
      }} onClick={this.handleCLick} className={" pt-elevation-2 pt-interactive home-card github-card" + darkClass} >
      	 <img className={'github-image'} src={"../assets/png/octocat.png"} />
      </div>
    );
  }
}
