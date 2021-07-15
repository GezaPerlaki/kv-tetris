import React from 'react';
import './Score.css';

class Score extends React.Component {
  render() {
    return <div className='score'>Score: {this.props.score}</div>;
  }
}

export default Score;
