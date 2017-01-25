import React from 'react';

export default class ShedALittleLight extends React.Component {


constructor(props) {
    super(props);

    this.state = {
      loading: true
    }
    this.handleLoading = this.handleLoading.bind(this)
  }


  handleLoading() {
    this.setState({
      loading: false
    })
  }




  render() {

    var loadingStyle = {

      }

    if(this.state.loading===true){
      loadingStyle = {
        background: "url('../assets/svg/balls.svg') center center no-repeat"
      }
    }
    return (
      <div className={' small-music-player-wrapper '} style={loadingStyle}>
        <iframe onLoad={this.handleLoading} className={' small-music-player '} src="https://bandcamp.com/EmbeddedPlayer/track=536979874/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless>
          <a href="https://bengoldstein.bandcamp.com/rack/shed-a-little-light">Shed a Little Light by The Mamajamas (feat. Ben Goldstein) </a>
        </iframe>
      </div>
    );
  }
}
