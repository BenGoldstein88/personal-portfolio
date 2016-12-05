import React from 'react';

export default class BeatToBeat extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{
      	margin: '0 auto',
      	width: '50%'
      }}>

      	<iframe style={{
      		border: '0',
      		width: '100%',
      		height: '120px',
      		margin: '0 auto'
      		}} src="http://bandcamp.com/EmbeddedPlayer/track=571820796/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="http://bengoldstein.bandcamp.com/track/beat-to-beat">Beat to Beat by Ben Goldstein</a></iframe>
      </div>
    );
  }
}
