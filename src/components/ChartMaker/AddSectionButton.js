import React from 'react';

export default class AddSectionButton extends React.Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(e) {
    e.preventDefault();

    this.props.addSection();

  }

  render() {
    return (
      <div onClick={this.handleClick} className={'add-section-button'}>
      	ADD SECTION BUTTON
      </div>
    );
  }
}
