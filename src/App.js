import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component  {
  
  componentDidMount() {
    this.np = new NodePlayer();
    this.np.setBufferTime(1000);
    this.np.setView("video");
    this.np.on("stats",(s)=>{
      console.log(s);
    });
    
  }

  startPlay() {
    this.np.start("http://18.166.63.130:8000/live/live.flv?sign=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhY2Nlc3NLZXkiOiI0Njk2YWM0MzRkNDM3NjVlZTY2YzBhYWRhNzZlZDE4NiIsImlzcyI6IjA6MDowOjA6MDowOjA6MSIsImlhdCI6MTU4OTg3NjU5NywiaXBBZGRyIjoiMDowOjA6MDowOjA6MDoxIiwiZXhwIjo0MTgxODc2NTk3fQ.kA-yolrLYZcQbO2flwR_cbwj1PxOXZUYcRvBHh9-vJ44696ac434d43765ee66c0aada76ed186");
  }
  stopPlay() {
    this.np.stop();
  }
  render()  {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <canvas id="video" width="1280" height="768"></canvas>
          <button onClick={this.startPlay.bind(this)}>Start</button><button onClick={this.stopPlay.bind(this)}>Stop</button>
        </header>
      </div>
    );
  }
}
export default App;