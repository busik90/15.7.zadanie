class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      running: false,
      times: {
        minutes: 0,
        seconds: 0,
        miliseconds: 0
      },
      scores: []
    };
  }

  changeRunningState = (value) => {
    this.setState({ running: value});
  }

  calculate = () => {
    this.setState( ({times}) => { times.miliseconds += 1; } );
    if (this.state.times.miliseconds >= 100) {
      this.setState( ({times}) => {
        times.seconds += 1;
        times.miliseconds = 0;
      });
    }
    if (this.state.times.seconds >= 60) {
      this.setState( ({ times }) => {
        times.minutes += 1;
        times.seconds = 0;
      });
    }
  }

  format = (times) =>  {
    function pad0(value) {
      let result = value.toString();
      if (result.length < 2) {
        result = '0' + result;
      }
      return result;
    }
    
    return `${pad0(times.minutes)}:${pad0(times.seconds)}:${pad0(Math.floor(times.miliseconds))}`;
  }

  resetTime = () => {
    this.setState( ({times}) => {
      times.minutes = 0;
      times.seconds = 0;
      times.miliseconds = 0;
    });
  }

  saveScore = () => {
    const scores = [...this.state.scores, {
      id: this.state.scores.length,
      value: this.format(this.state.times)
    }];
    this.setState({scores});

    // console.log(scores[scores.length - 1]);
  }

  render() {
    return (
      <div className='stopwatchApp'>
        <Controls
          isRunning={this.state.running}
          runningState={this.changeRunningState}
          start={this.calculate}
          reset={this.resetTime}
          save={this.saveScore}
        />
        <Stopwatch
          times={this.state.times}
          format={this.format}
        />
        <ScoresTable
          scores={this.state.scores}
        />
        {/* <ClearListButton /> */}
      </div>
    )
  }
}