import React from 'react';
import ResumeCard from './ResumeCard'
export default class ContactPage extends React.Component {
  
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
      	<ResumeCard />
      </div>
    );
  }
}
