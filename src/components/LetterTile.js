import React from 'react';

export default class LetterTile extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={'letter-tile'}>
      	{this.props.letter}
      </div>
    );
  }
}
