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
    // console.log("TweetWall::componentWillMount()")
    this.setState({
      tweets: this.props.newTweets
    }, ()=>console.log(this.state.tweets))
  }
  // TODO: shouldComponentUpdate()
  shouldComponentUpdate(nextProps, nextState){
    console.log("TweetWall::shouldComponentUpdate()")
    console.log("nextProps", nextProps);
    console.log("nextState", nextState);
    return nextProps.newTweets.length > 0;
  }

  // TODO: componentWillReceiveProps()
  componentWillReceiveProps(nextProps){
    console.log("TweetWall::componentWillReceiveProps()")
    console.log("nextProps", typeof(nextProps.newTweets));
    this.setState({
      tweets: [...nextProps.newTweets, ...this.state.tweets]
    })
  }

  render() {
    const tweets = this.state.tweets.map((tweet, index) => <Tweet text={tweet.text} key={index} />);

    return (
      <div>{tweets}</div>
    );
  }
}

export default TweetWall;
