import React from 'react';
import AWikiInTimeCard from './AWikiInTimeCard'
import BookiCard from './BookiCard'
import PoggleCard from './PoggleCard';
import HangmanCard from './HangmanCard';
export default class ProjectsPage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    var darkClass = ""
    if(this.props.darkStatus===true) {
      darkClass = " pt-dark "
    }
    
    return (
      <div style={{
      	width: '100%',
      	height: '100%',
      	marginTop: '60px'
      }} className={" " + darkClass}>
        <PoggleCard darkStatus={this.props.darkStatus}/>
        <AWikiInTimeCard darkStatus={this.props.darkStatus}/>
        <BookiCard darkStatus={this.props.darkStatus}/>
        <HangmanCard darkStatus={this.props.darkStatus} />

      </div>
    );
  }
}
