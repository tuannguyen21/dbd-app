import React from "react";
import {perks} from './Images';

class Roll extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        randomPaths: Array(4).fill("")
      }
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      const randomPaths = this.state.randomPaths.slice();
      let i = 0;
      while ( i < 4 ) {
        const randPath = perks[Math.floor(Math.random() * perks.length)];
        if (randomPaths.includes(randPath) == 0){
            randomPaths[i] = randPath;
            i++;
        }
      }
      this.setState({
        randomPaths: randomPaths
      });
    }
  
    render() {
      console.log("Hello")
      return (
        <div>
  
          <div class="img-clip-block">
            <div class="img-clip-row">
              <a href="#" class="img-clip-wrap">
                <div class="overlay">
                  <div class="overlay-content">
                    <img src={this.state.randomPaths[0]}></img>
                  </div>
                </div>
              </a>
            </div>
  
            <div class="img-clip-row">
              <a href="#" class="img-clip-wrap">
                <div class="overlay">
                  <div class="overlay-content">
                    <img src={this.state.randomPaths[1]}></img>
                  </div>
                </div>
              </a>
  
              <a href="#" class="img-clip-wrap">
                <div class="overlay">
                  <div class="overlay-content">
                    <img src={this.state.randomPaths[2]}></img>
                  </div>
                </div>
              </a>
            </div>
  
            <div class="img-clip-row">
              <a href="#" class="img-clip-wrap polygon-clip-rhombus">
                <div class="overlay">
                  <div class="overlay-content">
                    <img src={this.state.randomPaths[3]}></img>
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