import React from 'react';
import TweetWall from './TweetWall';

import { getTweets }from '../lib/mockAPI';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      latestTweets: []
    };
  }

  // TODO: componentWillMount()
  componentWillMount(){
    // console.log("App::componentWillMount()");
    this.fetchTweets();

  }
  // TODO: componentDidMount()
  componentDidMount(){
    // console.log("App::componentDidMount()")
    this.startInterval();
  }
  // TODO: componentWillUnmount()
  componentWillUnmount(){
    // console.log("App::componentWillUnmount()");
    this.cleanUpInterval();
  }

  startInterval = () => {
    this.interval = setInterval(this.fetchTweets, 2000);
  }

  cleanUpInterval = () => clearInterval(this.interval);

  fetchTweets = () => {
    const newTweets = getTweets();
    this.setState({
      latestTweets: newTweets
    });
  }

  render() {
    return (
      <div>
        <TweetWall newTweets={this.state.latestTweets} />
      </div>
    )
  }
}

export default App;
