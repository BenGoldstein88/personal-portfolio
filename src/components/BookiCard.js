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
    return (
      <div className="pt-card pt-elevation-2 pt-interactive project-card booki-card" style={{borderRadius: '15%'}}  onClick={this.handleCardClick}>
      	<h1> Booki </h1>
        <p style={{textOverflow: 'ellipsis'}}>
          A sports betting app that lets you view upcoming games and propose prop bets for acceptance by any registered friends. All payment processing is handled through Stripe, and winnnings are automatically paid to your debit-card/bank-account upon game completion. Full stats are available before and after all games. Personally, I handled all of the Stripe/Payment processing and interface as well as securing and consuming the statistics API.

        </p>
      	<BookiPopoverBar />
      	
      </div>
    );
  }
}
