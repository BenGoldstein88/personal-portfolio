import React from 'react';
import StoneCountry from './StoneCountry'
export default class StoneCountryCard extends React.Component {


  constructor(props) {
    super(props);
  }

  render() {
  	var darkClass = ""
    if(this.props.darkStatus===true) {
      darkClass = " pt-dark"
    }
    return (
      <div className={"pt-card pt-elevation-2 pt-interactive" + darkClass} style={{
      		margin: '0 auto',
      		marginTop: '15%',
      		width: '80%'
  }}>
      	<StoneCountry />
      </div>
    );
  }
}
