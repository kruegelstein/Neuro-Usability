import React, { Component } from 'react';

export class Distraction extends Component {

  componentWillReceiveProps(nextProps) {
    if(!this.props.enabled && nextProps.enabled) {
      const audio = new Audio('src/assets/HOHOHO.mp3');
      audio.play();
    }
  }

  render() {
    if (this.props.enabled) {
      return (
        <div className="distraction-container">
          <img src="src/assets/santa.jpg" id="santa" className="santa"/>
        </div>
      );
    }
    return (
      null
    );
  }
}

export default Distraction;
