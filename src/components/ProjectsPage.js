import React from 'react';
import AWikiInTimeCard from './AWikiInTimeCard'
import BookiCard from './BookiCard'
export default class ProjectsPage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    var darkClass = ""
    if(this.props.darkStatus===true) {
      darkClass = "pt-dark"
    }
    
    return (
      <div style={{
      	width: '100%',
      	height: '100%',
      	marginTop: '60px'
      }} className={" " + darkClass}>
      	<AWikiInTimeCard />
        <BookiCard />

      </div>
    );
  }
}
