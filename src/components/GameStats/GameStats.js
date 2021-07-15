import React from 'react';
import './GameStats.css';

import GameBoard from '../GameBoard/GameBoard';

class GameStats extends React.Component {
  render() {
    return (
      <div className='game-stats'>
        Next
        <GameBoard
          board={this.props.board}
          rotateValue={0}
          hideBorders={true}
        />
      </div>
    );
  }
}

export default GameStats;
