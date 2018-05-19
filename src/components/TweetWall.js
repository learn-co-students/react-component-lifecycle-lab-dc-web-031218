import React from 'react';
import Tweet from './Tweet';

class TweetWall extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: []
    };
  }

  // TODO: componentWillMount()
  componentWillMount(){
    this.state.tweets = this.props.newTweets
    // this.state = {tweets: this.props.newTweets}
  }
  // TODO: shouldComponentUpdate()
  shouldComponentUpdate(nextProps, nextState){
    return nextProps.newTweets.length > 0
  }
  // TODO: componentWillReceiveProps()
  componentWillReceiveProps(nextProps){
    this.state = {
      tweets: [...nextProps.newTweets, ...this.state.tweets]
    }
  }

  render() {
    const tweets = this.state.tweets.map((tweet, index) => <Tweet text={tweet.text} key={index} />);

    return (
      <div>{tweets}</div>
    );
  }
}

export default TweetWall;
