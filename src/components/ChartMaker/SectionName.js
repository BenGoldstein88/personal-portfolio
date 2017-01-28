import React from 'react';

export default class SectionName extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
    	clicked: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleChange(e) {
  	this.props.changeName(e.target.value);
  	// this.setState({
  	// 	clicked: false
  	// })
  }

  handleClick(e) {
  	this.setState({
  		clicked: !this.state.clicked
  	})
  }

  handleKeyPress(e) {
    if(e.key === 'Enter') {
      this.setState({
      	clicked: false
      });
    }

  }

  render() {
    var thingToDisplay = <p className={'section-name'}>{this.props.name}</p>

    if(this.state.clicked) {
      thingToDisplay = <input ref={'input'} className={'section-name-input'} type={'text'} onKeyPress={this.handleKeyPress} onChange={this.handleChange} placeholder={this.props.name} autoFocus/>
    } 
    return (
      <div className={'section-name-wrapper'} onClick={this.handleClick} >
      	{thingToDisplay}
      </div>
    );
  }
}
