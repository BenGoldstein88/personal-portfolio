import React from 'react';
import NavBarTop from './NavBarTop';
import HomePage from './HomePage';
import ContactPage from './ContactPage';
import ProjectsPage from './ProjectsPage';
import MusicPage from './MusicPage';
import {FocusStyleManager} from '@blueprintjs/core';

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    FocusStyleManager.onlyShowFocusOnTabs();

    this.state={
      currentView: 'home',
      topNavStyles: {
        home: {color: "red"},
        contact: {color: "black"},
        projects: {color: "black"},
        music: {color: "black"}
      },
      dark: true
    }

    this.resetStyleState = this.resetStyleState.bind(this)
    this.handleTopNavClick = this.handleTopNavClick.bind(this)

    document.body.style.backgroundColor = '#c6c9ce'

  }

  resetStyleState() {
    this.setState({
      topNavStyles: {
        home: {color: "black"},
        contact: {color: "black"},
        loop: {color: "black"},
        hunt: {color: "black"}
      }

    })
  }
  handleTopNavClick(view) {

    switch(view) {
      case 'home':
        this.resetStyleState();
        this.setState({
          currentView: 'home',
          topNavStyles: {
            home: {color: "red"}
          }
        })
        break;

      case 'contact':
        this.resetStyleState();
        this.setState({
          currentView: 'contact',
          topNavStyles: {
            contact: {color: "blue"}
          }
        })
        break;

      case 'projects':
        this.resetStyleState();
        this.setState({
          currentView: 'projects',
          topNavStyles: {
            projects: {color: "green"}
          }
        })
        break;

      case 'music':
        this.resetStyleState();
        this.setState({
          currentView: 'music',
          topNavStyles: {
            music: {color: "pink"}
          }
        })
        break;
      case 'dark':
        var opposite = !this.state.dark
        this.setState({
          dark: opposite
        })
        break;

      default:
        console.log("Something went wrong with the view")

    }
  }

  render() {
    var thingToDisplay

    switch(this.state.currentView) {
      case 'home':
        thingToDisplay = <div style={{marginTop: "52px"}}> <HomePage darkStatus={this.state.dark} /> </div>
        break;
      case 'contact':
        thingToDisplay = <div style={{marginTop: "52px"}}> <ContactPage darkStatus={this.state.dark} /> </div>
        break;      
      case 'projects':
        thingToDisplay = <div style={{marginTop: "52px"}}> <ProjectsPage darkStatus={this.state.dark} /> </div>
        break;
      case 'music':
        thingToDisplay = <div style={{marginTop: "52px"}}> <MusicPage darkStatus={this.state.dark}/> </div>
        break;
      // case 'dark':
      //   break;
      default:
        thingToDisplay = "Error"
    }

    return (
      <div>
        <div>
          <NavBarTop currentView={this.state.currentView} topNavStyles={this.state.topNavStyles} onTopNavClick={this.handleTopNavClick} darkStatus={this.state.dark} />
        </div>

        {thingToDisplay}

      </div>
    );
  }
}
