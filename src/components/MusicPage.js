import React from 'react';
import StoneCountry from './StoneCountry';
import BeatToBeat from './BeatToBeat'
import SushiAndMiniskirts from './SushiAndMiniskirts'

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
        <StoneCountry darkStatus={this.props.darkStatus} />
        <BeatToBeat />
        <SushiAndMiniskirts />
      </div>
      );
  }
}
