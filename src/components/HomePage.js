import React from 'react';
import GitHubProfileCard from './GitHubProfileCard';
import LinkedInCard from './LinkedInCard'
import BandCampCard from './BandCampCard'
export default class HomePage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    var displayString = ""
    if(this.props.darkStatus===true) {
      displayString = "Click the 'moon' to toggle display."
    } else {
      displayString = "Click the 'lightbulb' to toggle display."
    }
    return (
      <div style={{
      		width: "100%",
      		height: "100%",
          textAlign: 'center'      }}>
      	<h1 style={{marginTop: '10%'}}> Portfolio for Ben Goldstein </h1>
        <h4> {displayString} </h4>
        <LinkedInCard darkStatus={this.props.darkStatus} />
        <BandCampCard darkStatus={this.props.darkStatus} />
        <GitHubProfileCard darkStatus={this.props.darkStatus} />
      </div>
    );
  }
}
