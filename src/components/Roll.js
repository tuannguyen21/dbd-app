import React from "react";
import {perks} from './Images';

class Roll extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        randomRoll: Array(4).fill(-1),
        randomPath: Array(4).fill("")
      }
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      const min = 0;
      const max = 79;
      const randomRoll = this.state.randomRoll.slice();
      const randomPath = this.state.randomPath.slice();
      randomRoll.fill(-1);
      let i = 0;
      while ( i < 4 ) {
        const rand = Math.floor(Math.random() * 0.99 * (max - min + 1) + min);
        console.log((randomRoll.includes(perks[rand].valueVar) == 0), rand);
        if (randomRoll.includes(perks[rand].valueVar) == 0){
            randomRoll[i] = perks[rand].valueVar
            randomPath[i] = perks[rand].pathVar;
            i++;
        }
      }
      this.setState({
        randomRoll: randomRoll,
        randomPath: randomPath
      });
    }
  
    render() {
      return (
        <div>
  
          <div class="img-clip-block">
            <div class="img-clip-row">
              <a href="#" class="img-clip-wrap">
                <div class="overlay">
                  <div class="overlay-content">
                    <img src={this.state.randomPath[0]}></img>
                  </div>
                </div>
              </a>
            </div>
  
            <div class="img-clip-row">
              <a href="#" class="img-clip-wrap">
                <div class="overlay">
                  <div class="overlay-content">
                    <img src={this.state.randomPath[1]}></img>
                  </div>
                </div>
              </a>
  
              <a href="#" class="img-clip-wrap">
                <div class="overlay">
                  <div class="overlay-content">
                    <img src={this.state.randomPath[2]}></img>
                  </div>
                </div>
              </a>
            </div>
  
            <div class="img-clip-row">
              <a href="#" class="img-clip-wrap polygon-clip-rhombus">
                <div class="overlay">
                  <div class="overlay-content">
                    <img src={this.state.randomPath[3]}></img>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div class="button">
            <button type="button" class="btn btn-secondary btn-rounded" onClick={this.handleClick}> Random Roll </button>
          </div>
        </div >
      );
    }
}

export default Roll;