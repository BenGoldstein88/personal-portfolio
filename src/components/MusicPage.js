import React from 'react';
import StoneCountryCard from './StoneCountryCard';
import BeatToBeatCard from './BeatToBeatCard'
import SushiAndMiniskirtsCard from './SushiAndMiniskirtsCard'

export default class MusicPage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    var darkClass = ""
    if(this.props.darkStatus===true) {
      darkClass = "pt-dark"
    }

    return (
      <div style={{
        height: '100%',
        width: '100%',
        marginTop: '55px',
        textAlign: 'center'
      }} className={" " + darkClass} >
        <StoneCountryCard darkStatus={this.props.darkStatus} />
        <BeatToBeatCard darkStatus={this.props.darkStatus}/>
        <SushiAndMiniskirtsCard darkStatus={this.props.darkStatus}/>
      </div>
      );
  }
}
