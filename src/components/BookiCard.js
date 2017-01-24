import React from 'react';
import BookiPopoverBar from './BookiPopoverBar';

export default class BookiCard extends React.Component {


  constructor(props) {
    super(props);
  }

  handleCardClick(e) {
    e.preventDefault();

    window.open("https://github.com/christopher-lamkin/booki")
  }

render() {
    var darkClass = " light-class "
    if(this.props.darkStatus===true) {
      darkClass = " dark-class "
    }
    return (
      <div className={" pt-elevation-2 pt-interactive project-card project-card-effect booki-card "+darkClass} style={{borderRadius: '15%'}}  onClick={this.handleCardClick}>
      	<h1> Booki </h1>
        <p className={' project-description '} >
          Make prop bets with your friends on upcoming sports matchups! An experiment in payment processing and automatic API updating, this project is not hosted anywhere.
        </p>
        
      </div>
    );
  }
}
          // A sports betting app that lets you view upcoming games and propose prop bets for acceptance by any registered friends. All payment processing is handled through Stripe, and winnnings are automatically paid to your debit-card/bank-account upon game completion. Full stats are available before and after all games. Personally, I handled all of the Stripe/Payment processing and interface as well as securing and consuming the statistics API.
