import React from 'react';
export default class StoneCountry extends React.Component {


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
        margin: '0 auto',
        width: '50%',
        height: '120px'
      }

    if(this.state.loading===true){
      loadingStyle = {
        margin: '0 auto',
        width: '50%',
        height: '120px',
        background: "url('../assets/svg/balls.svg') center center no-repeat"
      }
    }

    return (
      <div style={loadingStyle}>

        <iframe onLoad={this.handleLoading} style={{
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
