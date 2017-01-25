import React from 'react';
import StoneCountry from './StoneCountry'
export default class StoneCountryCard extends React.Component {


  constructor(props) {
    super(props);
  }

  render() {
  	var darkClass = " light-class "
    if(this.props.darkStatus===true) {
      darkClass = " dark-class"
    }
    return (
      <div className={"music-card stone-country-card pt-elevation-2 pt-interactive" + darkClass}>
      	<StoneCountry />
      </div>
    );
  }
}
