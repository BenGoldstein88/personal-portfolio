import React from 'react';
import SushiAndMiniskirts from './SushiAndMiniskirts'
export default class SushiAndMiniskirtsCard extends React.Component {


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
      		width: '80%',
          height: '1000px'
  }} >
      	<SushiAndMiniskirts />
      </div>
    );
  }
}
