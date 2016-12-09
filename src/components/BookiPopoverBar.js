import React from 'react';
import BookiPopover from './BookiPopover';
import BookiCollaboratorsPopover from './BookiCollaboratorsPopover';
import BookiURLPopover from './BookiURLPopover';

export default class BookiPopoverBar extends React.Component {


  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{
      	marginTop: '5%'
      }}>
      	<BookiPopover />
        <BookiCollaboratorsPopover />
        <BookiURLPopover />
      </div>
    );
  }
}
