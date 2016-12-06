import React from 'react';

export default class SushiAndMiniskirts extends React.Component {
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
      		height: '800px',
      		align: 'center'
      	}} src="https://bandcamp.com/EmbeddedPlayer/album=1425601790/size=large/bgcol=ffffff/linkcol=0687f5/transparent=true/" seamless><a href="https://bengoldstein.bandcamp.com/album/sushi-miniskirts">Sushi &amp; Miniskirts by Ben Goldstein</a></iframe>
      </div>
    );
  }
}
