import React from 'react';
import { Popover, PopoverInteractionKind, Position } from '@blueprintjs/core'

export default class AWikiInTimeURLPopover extends React.Component {


  constructor(props) {
    super(props);
  }

render() {
  	let popoverContent = (
            <div>
                <h5>Website URL</h5>
                <p><a href="https://awikiintime.herokuapp.com">https://awikiintime.herokuapp.com</a>. Or just click on the surrounding box!</p>
            </div>
        );
    return (
      	<Popover content={popoverContent}
                 interactionKind={PopoverInteractionKind.HOVER}
                 popoverClassName="pt-popover-content-sizing"
                 position={Position.RIGHT}
                 useSmartPositioning={false} 
                 >
                 <button className="pt-button pt-intent-warning">URL</button>
        </Popover>
      	
    );
  }
}
