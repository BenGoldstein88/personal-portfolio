import React from 'react';
import BenHoverButton from './BenHoverButton'
import { Button, Position, Toaster } from "@blueprintjs/core";

import '../assets/@blueprintjs/core';

export default class NavBarTop extends React.Component {

  constructor(props) {
    super(props);
    const toaster = Toaster.create()

    this.state = {
      toaster: toaster,
      darkButtonClasses: "pt-button pt-minimal pt-icon-moon",
      lightButtonClasses: "pt-button pt-minimal pt-icon-lightbulb",
      darkClass: "pt-dark"
    }

    this.handleNavButtonClick = this.handleNavButtonClick.bind(this)

    this.darkToast = this.darkToast.bind(this)
    this.lightToast = this.lightToast.bind(this)

  }


  darkToast() {
    var message = "Dark Mode!";

    this.state.toaster.show({ 
      message: message,
      canEscapeKeyClear: true,
      timeout: 500
    })
  }

  lightToast() {

    var message = "Light Mode!";

    this.state.toaster.show({ 
      message: message,
      className: 'pt-dark',
      canEscapeKeyClear: true,
        timeout: 500
      })    
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
    var classes = ""
    var darkClass = ""
    var topNavStyles = this.props.topNavStyles;
    if(this.props.darkStatus===true) {
      classes = this.state.darkButtonClasses
      darkClass = this.state.darkClass
      topNavStyles = {
        contact: {color: 'white'},
        projects: {color: 'white'},
        music: {color: 'white'},
        home: {color: 'white'},
        chart: {color: 'white'}
      }
      topNavStyles[this.props.currentView] = this.props.topNavStyles[this.props.currentView]
    } else {
      classes = this.state.lightButtonClasses
    }


    return (
      	<nav className={"navbar-top pt-navbar pt-fixed-top " + darkClass}>
      		<div className="pt-navbar-group pt-align-left">
            <BenHoverButton onNavButtonClick={this.handleNavButtonClick} topNavStyles={topNavStyles} />
      		</div>
      		<div className="pt-navbar-group pt-align-right">
      			<button name="contact" style={topNavStyles.contact} onClick={this.handleNavButtonClick} className={"pt-button pt-minimal navbar-button " + darkClass}>
      			Contact
      			</button>
      			<button name="projects" style={topNavStyles.projects} onClick={this.handleNavButtonClick} className={"pt-button pt-minimal navbar-button " + darkClass}>
      			Projects
      			</button>
      			<button name="music" style={topNavStyles.music} onClick={this.handleNavButtonClick} className={"pt-button pt-minimal navbar-button " + darkClass}>
      			Music
      			</button>
            <button name="chart" style={topNavStyles.chart} onClick={this.handleNavButtonClick} className={"pt-button pt-minimal navbar-button " + darkClass}>
            ?
            </button>
            <span>
        			<Button name="dark" onClick={this.handleNavButtonClick} className={classes}>
        			</Button>
            </span>
      		</div>

      	</nav>
    );
  }
}
