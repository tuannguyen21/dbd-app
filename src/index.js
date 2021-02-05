import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Roll from "./components/Roll";

class Site extends React.Component {

  render() {
    return (
      <div className="Site">
        <div className="Roll">
          <Roll />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Site />,
  document.getElementById('root')
);