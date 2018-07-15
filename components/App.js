class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      running: false,
      times: {
        minutes: 0,
        seconds: 0,
        miliseconds: 0
      }
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

  render() {
    return (
      <div className='app'>
        <Controls
          isRunning={this.state.running}
          runningState={this.changeRunningState}
          start={this.calculate}
        />
        <Stopwatch
          times={this.state.times}
        />
        {/* <ScoresTable /> */}
        {/* <ClearListButton /> */}
      </div>
    )
  }
}