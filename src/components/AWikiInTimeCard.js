import React from 'react';
import AWikiInTimePopover from './AWikiInTimePopover';
import CollaboratorsPopover from './CollaboratorsPopover';
import AWikiInTimeURLPopover from './AWikiInTimeURLPopover';
export default class AWikiInTimeCard extends React.Component {


  constructor(props) {
    super(props);
  }

  handleCardClick(e) {
    e.preventDefault();

    window.open("https://awikiintime.herokuapp.com")
  }

  render() {
    return (
      <div className="pt-card pt-elevation-2 pt-interactive" style={{
      	height: '300px',
      	width: '80%',
      	margin: '0 auto',
        textAlign: 'center' 
      }} onClick={this.handleCardClick}>
      	<h1> A Wiki in Time </h1>
        <p>
          A marriage between Google Maps and two Wikipedia APIs, A Wiki in Time lets you explore and interact with a map, doing visual searches for historical events by type, location, and time period. Personal responsibilities included all development and logic for the Google Maps API, styling, querying, and marker placement. In addition to the map UI/UX/Logic, I ensured a rich, robust data set to display by supplementing the Wiki API with descriptions and dates custom scraped from thousands of relevant Wikipedia articles. Conceived, designed, and implemented the novel 'polygon mode' – a separate search criteria wherein a user could construct a malleable geometric shape to geographically bound search results.

        </p>
      	<AWikiInTimePopover />
        <CollaboratorsPopover />
        <AWikiInTimeURLPopover />
      	
      </div>
    );
  }
}
