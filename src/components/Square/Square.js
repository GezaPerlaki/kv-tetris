import React from 'react';
import './Square.css';

class Square extends React.Component {
  render() {
    let classList = `tetromino-square`;
    if (this.props.shapeColor) {
      classList += ` ${this.props.shapeColor}`;
    } else if (this.props.hasBorder) {
      classList += ` empty-with-border`;
    } else {
      classList += ` empty`;
    }

    return <div className={classList}></div>;
  }
}

export default Square;
