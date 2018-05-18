import React from "react";
import Tweet from "./Tweet";

class TweetWall extends React.Component {
  constructor() {
    super();

    this.state = {
      tweets: []
    };
  }

  // // TODO: componentWillMount()
  // componentWillMount() {
  //   this.setState({ tweets: this.props.newTweets });
  // }
  //

  componentDidMount() {
    this.setState({ tweets: this.props.newTweets });
  }

  // TODO: shouldComponentUpdate()
  shouldComponentUpdate = nextProps => !!nextProps.newTweets.length;

  // // TODO: componentWillReceiveProps()
  // componentWillReceiveProps(nextProps) {
  //   this.setState({ tweets: [...nextProps.newTweets, ...this.state.tweets] });
  // }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      tweets: [...nextProps.newTweets, ...prevState.tweets]
    };
  }

  render() {
    const tweets = this.state.tweets.map((tweet, index) => (
      <Tweet text={tweet.text} key={index} />
    ));

    return <div>{tweets}</div>;
  }
}

export default TweetWall;
