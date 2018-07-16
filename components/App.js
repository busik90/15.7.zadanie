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
      saveState: false,
      savedScore: ''
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

  resetTime = () => {
    this.setState( ({times}) => {
      times.minutes = 0;
      times.seconds = 0;
      times.miliseconds = 0;
    });
  }

  changeSaveState = (value) => {
    this.setState({ saveState: value });
  }

  saveScore = (score) => {
    this.setState({ saveState: false });
    this.setState({ savedScore: score });
    console.log(score);
  }

  render() {
    return (
      <div className='stopwatchApp'>
        <Controls
          isRunning={this.state.running}
          runningState={this.changeRunningState}
          start={this.calculate}
          reset={this.resetTime}
          save={this.changeSaveState}
        />
        <Stopwatch
          times={this.state.times}
          saveState={this.state.saveState}
          saveScore={this.saveScore}
        />
        <ScoresTable
          savedScore={this.state.savedScore}
        />
        {/* <ClearListButton /> */}
      </div>
    )
  }
}