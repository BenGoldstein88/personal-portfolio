import React from 'react';
import AWikiInTimePopoverBar from './AWikiInTimePopoverBar';

export default class AWikiInTimeCard extends React.Component {


  constructor(props) {
    super(props);
  }

  handleCardClick(e) {
    e.preventDefault();

    window.open("https://awikiintime.herokuapp.com")
  }

  render() {
    var darkClass = " light-class "
    if(this.props.darkStatus===true) {
      darkClass = " dark-class "
    }
    return (
      <div className={"pt-elevation-2 pt-interactive project-card project-card-effect wiki-card"+darkClass} style={{borderRadius: '15%'}} onClick={this.handleCardClick}>
      	<h1> A Wiki in Time </h1>
        <p className={' project-description '}>
          Explore the world through historical landmarks like archaeological sites, battles, and natural disasters. Currently up and running on Heroku.
        </p>
        
      </div>
    );
  }
}
          // A marriage between Google Maps and two Wikipedia APIs, A Wiki in Time lets you explore and interact with a map, doing visual searches for historical events by type, location, and time period. Personal responsibilities included all development and logic for the Google Maps API, styling, querying, and marker placement. In addition to the map UI/UX/Logic, I ensured a rich, robust data set to display by supplementing the Wiki API with descriptions and dates custom scraped from thousands of relevant Wikipedia articles. Conceived, designed, and implemented the novel 'polygon mode' – a separate search criteria wherein a user could construct a malleable geometric shape to geographically bound search results.
