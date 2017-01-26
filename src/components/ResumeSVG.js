import React from 'react';

export default class ResumeSVG extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={' sample-svg-wrapper '}>
        <svg className={' sample-svg '}>
          <rect className={' sample-svg-rect '} />
        </svg>
      </div>
    );
  }
}
