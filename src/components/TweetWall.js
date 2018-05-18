import React from "react";
import Tweet from "./Tweet";

class TweetWall extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: []
    };
  }

  componentWillMount() {
    this.setState({ tweets: this.props.newTweets });
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.newTweets.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  componentWillReceiveProps(nextProps) {
    let newTweets = nextProps.newTweets;
    let oldTweets = [...this.state.tweets];

    newTweets.forEach(tweet => {
      oldTweets.unshift(tweet);
    });
    this.setState({
      tweets: oldTweets
    });
  }

  render() {
    const tweets = this.state.tweets.map((tweet, index) => (
      <Tweet text={tweet.text} key={index} />
    ));

    return <div>{tweets}</div>;
  }
}

export default TweetWall;
