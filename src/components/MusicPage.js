import React from 'react';
import StoneCountry from './StoneCountry';
import BeatToBeat from './BeatToBeat'
import SushiAndMiniskirts from './SushiAndMiniskirts'

export default class MusicPage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{
        height: '100%',
        width: '100%',
        marginTop: '55px',
        minHeight: '1000px',
        border: '1px solid red'
      }}>
        <StoneCountry />
        <BeatToBeat />
        <SushiAndMiniskirts />
      </div>
    );
  }
}
