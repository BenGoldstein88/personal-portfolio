import React from 'react';
// import AWikiInTimeCard from './AWikiInTimeCard'

import { Popover, PopoverInteractionKind, Position } from '@blueprintjs/core'

export default class AWikiInTimePopover extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
  	let popoverContent = (
            <div>
                <h5>A Wiki in Time</h5>
                <p>A Marriage between GoogleMaps and Wikipedia that lets you peruse an interactive worldmap through history for famous battles, explorers, disasters, and more!</p>
            </div>
        );
    return (
      	<Popover content={popoverContent}
                 interactionKind={PopoverInteractionKind.HOVER}
                 popoverClassName="pt-popover-content-sizing"
                 position={Position.LEFT}
                 useSmartPositioning={false} 
                 >
                 <button className="pt-button pt-intent-primary">Details</button>
        </Popover>
      	
    );
  }
}
