import React from 'react';
import AWikiInTimeCard from './AWikiInTimeCard'
export default class ProjectsPage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{
      	width: '100%',
      	height: '100%',
      	marginTop: '60px',
      	border: '1px solid green'
      }}>
      	<AWikiInTimeCard />

      </div>
    );
  }
}
