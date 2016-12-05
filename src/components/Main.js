import React from 'react';
import '../assets/@blueprintjs/core/dist/blueprint.css';

export default class Main extends React.Component {
  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}