import React from 'react';
// import AWikiInTimeCard from './AWikiInTimeCard'

import { Popover, PopoverInteractionKind, Position } from '@blueprintjs/core'

export default class BookiPopover extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
  	let popoverContent = (
            <div>
                <h5>Booki</h5>
                <p> Make bets with your friends that are automatically updated/paid at game's end!</p>
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
