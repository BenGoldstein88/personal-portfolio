import React from 'react';
import GitHubProfileCard from './GitHubProfileCard';
import LinkedInCard from './LinkedInCard'
import BandCampCard from './BandCampCard'
export default class HomePage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{
      		width: "100%",
      		height: "100%",
          textAlign: 'center'      }}>
      	<h1 style={{marginTop: '10%'}}> This is the homepage </h1>
        <LinkedInCard darkStatus={this.props.darkStatus} />
        <BandCampCard darkStatus={this.props.darkStatus} />
        <GitHubProfileCard darkStatus={this.props.darkStatus} />
      </div>
    );
  }
}
