import React from 'react';
import './Options.css';

class Options extends React.Component {
  render() {
    return (
      <div className='options'>
        <button className='start-button' onClick={this.props.onStart}>
          Start Game
        </button>
        <button className='pause-button' onClick={this.props.onPause}>
          Pause
        </button>
      </div>
    );
  }
}

export default Options;
