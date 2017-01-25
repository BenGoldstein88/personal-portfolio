import React from 'react';
import BeatToBeat from './BeatToBeat'
export default class BeatToBeatCard extends React.Component {


  constructor(props) {
    super(props);
  }

  render() {
  	var darkClass = " light-class "
    if(this.props.darkStatus===true) {
      darkClass = " dark-class "
    }
    return (
      <div className={"music-card beat-to-beat-card pt-elevation-2 pt-interactive" + darkClass} >
      	<BeatToBeat />
      </div>
    );
  }
}
