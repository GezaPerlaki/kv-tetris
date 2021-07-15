import React from 'react';
import './GameBoard.css';
import Square from '../Square/Square';

class GameBoard extends React.Component {
  renderBoard() {
    const board = this.props.board;
    const jsxBoard = [];
    for (let i = 0; i < board.length; ++i) {
      const row = board[i];
      const jsxRow = [];
      for (let j = 0; j < row.length; ++j) {
        const cell = row[j];
        jsxRow.push(
          <Square
            shapeColor={cell}
            hasBorder={!this.props.hideBorders}
            key={cell + j}
          />
        );
      }
      jsxBoard.push(
        <div className='row' key={row.toString() + i}>
          {jsxRow}
        </div>
      );
    }

    return jsxBoard;
  }
  render() {
    return <div className='game-board'>{this.renderBoard()}</div>;
  }
}

export default GameBoard;
