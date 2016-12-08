import React from 'react';
import { Button, Position, Toaster } from "@blueprintjs/core";

import '../assets/@blueprintjs/core';

export default class NavBarTop extends React.Component {

  constructor(props) {
    super(props);
    const toaster = Toaster.create()

    this.state = {
      toaster: toaster
    }

    this.handleNavButtonClick = this.handleNavButtonClick.bind(this)
    this.darkToast = this.darkToast.bind(this)
    this.lightToast = this.lightToast.bind(this)

  }


  darkToast() {
    var message = "Dark Mode!";

    this.state.toaster.show({ message: message,
      canEscapeKeyClear: true})
  }

  lightToast() {

    var message = "Light Mode!";

    this.state.toaster.show({ message: message,
      className: 'pt-dark',
      canEscapeKeyClear: true })    
  }

  handleNavButtonClick(e) {
  	e.preventDefault()

  	var newView = e.target.getAttribute("name")

    if(newView==='dark') {
      this.state.toaster.clear();

      if(this.props.darkStatus===true) {
        this.lightToast();
      } else if(this.props.darkStatus===false) {
        this.darkToast();
      } else {
        console.log("Something went wrong with the toasts!")
      }
    }

    this.props.onTopNavClick(newView);

  	
  }


  render() {
      var darkClass = ""
      var darkIcon = "pt-icon-lightbulb"
    if(this.props.darkStatus === true) {
      darkClass = "pt-dark"
      darkIcon = "pt-icon-moon"
    }


    return (
      	<nav className={"pt-navbar pt-fixed-top " + darkClass}>
      		<div className="pt-navbar-group pt-align-left">
      			<button name="home" style={this.props.topNavStyles.home} onClick={this.handleNavButtonClick} className="pt-navbar-heading pt-button pt-minimal">
      				Ben Goldstein
      			</button>
      		</div>
      		<div className="pt-navbar-group pt-align-right">
      			<button name="contact" style={this.props.topNavStyles.contact} onClick={this.handleNavButtonClick} className="pt-button pt-minimal">
      			Contact
      			</button>
      			<button name="projects" style={this.props.topNavStyles.projects} onClick={this.handleNavButtonClick} className="pt-button pt-minimal">
      			Projects
      			</button>
      			<button name="music" style={this.props.topNavStyles.music} onClick={this.handleNavButtonClick} className="pt-button pt-minimal">
      			Music
      			</button>
            <span>
        			<Button name="dark" onClick={this.handleNavButtonClick} className={"pt-button pt-minimal " + darkIcon}>
        			</Button>
            </span>
      		</div>

      	</nav>
    );
  }
}
