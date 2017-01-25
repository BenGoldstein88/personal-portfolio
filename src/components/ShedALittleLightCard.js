import React from 'react';
import ShedALittleLight from './ShedALittleLight'
export default class ShedALittleLightCard extends React.Component {


  constructor(props) {
    super(props);
  }

  render() {
  	var darkClass = " light-class "
    if(this.props.darkStatus===true) {
      darkClass = " dark-class "
    }
    return (
      <div className={"music-card shed-a-little-light-card pt-elevation-2 pt-interactive" + darkClass}>
      	<ShedALittleLight />
      </div>
    );
  }
}
