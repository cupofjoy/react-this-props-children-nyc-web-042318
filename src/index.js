// Code Goes Here
import React, { Component } from 'react';

export default class MovieBrowser extends Component {
  render() {
    const currentPlayingTitle = 'Mad Max: Fury Road';
    const childrenWithExtraProp = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        isPlaying: child.props.title === currentPlayingTitle
      });
    });

    const childrenWithWrapperDiv = React.Children.map(this.props.children, child => {
      return (
        <div className="some-component-special-class">{child}</div>
      )
    })

    return (
      <div className="some-component">
        <p>This component has {React.Children.Count(this.props.children)} children.</p>
        {childrenWithWrapperDiv}
      </div>
    );
  }
}
