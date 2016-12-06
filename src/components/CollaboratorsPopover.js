import React from 'react';
import { Popover, PopoverInteractionKind, Position } from '@blueprintjs/core'

export default class CollaboratorsPopover extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		let popoverContent = (
			<div>
			<h5>Collaborators</h5>
			<p>Olya Royall, Raymond Sapida, Brian Mosley, and Christopher Lamkin</p>
			</div>
			);
		return (
			<Popover content={popoverContent}
			interactionKind={PopoverInteractionKind.HOVER}
			popoverClassName="pt-popover-content-sizing"
			position={Position.BOTTOM}
			useSmartPositioning={false} 
			>
			<button className="pt-button pt-intent-success">Collaborators</button>
			</Popover>

			);
	}
}
