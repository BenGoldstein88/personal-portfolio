import React from 'react';
import AWikiInTimePopover from './AWikiInTimePopover';
import AWikiInTimeCollaboratorsPopover from './AWikiInTimeCollaboratorsPopover';
import AWikiInTimeURLPopover from './AWikiInTimeURLPopover';

export default class AWikiInTimePopoverBar extends React.Component {


  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{
      	marginTop: '5%'
      }}>
      	<AWikiInTimePopover />
        <AWikiInTimeCollaboratorsPopover />
        <AWikiInTimeURLPopover />
      </div>
    );
  }
}
