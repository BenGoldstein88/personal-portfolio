import React from 'react';

export default class SushiAndMiniskirts extends React.Component {
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
        marginTop: '10%',
        height: '120px'
      }

    if(this.state.loading===true){
      loadingStyle = {
        margin: '0 auto',
        width: '50%',
        height: '120px',
        marginTop: '10%',
        background: "url('../assets/svg/balls2.svg') center center no-repeat"
      }
    }

    return (
      <div style={loadingStyle}>
        <iframe onLoad={this.handleLoading} style={{
          border: '0',
          width: '100%',
          height: '800px',
          align: 'center'          }
        } src="https://bandcamp.com/EmbeddedPlayer/album=1425601790/size=large/bgcol=ffffff/linkcol=0687f5/transparent=true/" seamless><a href="https://bengoldstein.bandcamp.com/album/sushi-miniskirts">Sushi &amp; Miniskirts by Ben Goldstein</a>
        </iframe>
      </div>
      );
  }
}
