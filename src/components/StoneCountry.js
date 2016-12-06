import React from 'react';

export default class StoneCountry extends React.Component {


  constructor(props) {
    super(props);

    // this.getIframelyHtml = this.getIframelyHtml.bind(this);
  }


  // getIframelyHtml() {
  // 	return {__html: '<a href="http://bandcamp.com/EmbeddedPlayer/album=2498704726/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="http://bengoldstein.bandcamp.com/album/stone-country" data-iframely-url></a>'};
  // }

  // componentDidMount() {
  // 	window.iframely && iframely.load();
  // }

// dangerouslySetInnerHTML={this.getIframelyHtml()} style={{ 
//           width: "90%",
//           height: "50%",
//           margin: '0 auto'
//         }}
  render() {
    return (
      <div style={{
        margin: '0 auto',
        width: '50%',
        border: '1px solid green'
      }}>

        <iframe style={{
          border: '0',
          width: '100%',
          height: '120px',
          margin: '0 auto'
           }} src="https://bandcamp.com/EmbeddedPlayer/album=2498704726/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless>
          <a href="https://bengoldstein.bandcamp.com/album/stone-country">Stone Country by Ben Goldstein</a>
        </iframe>
  		</div>
    );
  }
}
