import React from 'react';
import SushiAndMiniskirts from './SushiAndMiniskirts'
export default class SushiAndMiniskirtsCard extends React.Component {


  constructor(props) {
    super(props);
  }

  render() {
  	var darkClass = " light-class "
    if(this.props.darkStatus===true) {
      darkClass = " dark-class"
    }
    return (
      <div className={"music-card sushi-and-miniskirts-card pt-elevation-2 pt-interactive" + darkClass} >
      	<SushiAndMiniskirts />
      </div>
    );
  }
}
