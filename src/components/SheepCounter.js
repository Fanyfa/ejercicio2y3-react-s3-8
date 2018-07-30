import React from 'react';
import '../Stylesheet/SheepCounter.css';

class SheepCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 0,
            imageSheep: 'http://www.clker.com/cliparts/e/4/8/7/13280460782141411990Cartoon%20Sheep.svg.hi.png',
          };
          this.counterSheep = this.counterSheep.bind(this);
    }

    counterSheep() {
        const numberSheep = this.state.time+1;
        this.setState({
            time: numberSheep,
          });
    }

    renderSheeps() {
      const sheeps = [];
      for (let i = 0; i < this.state.time; i++) {
        sheeps.push(
          <img className="image--sheep" src={this.state.imageSheep} alt=""/>
        );
      }
      return sheeps;
    }

  render() {
    return (
        <div>{this.state.time}
        <button onClick={this.counterSheep}>Sheep</button>
        <div>
          {this.renderSheeps()}
        </div>
        </div>
     );
    }
  }

export default SheepCounter;