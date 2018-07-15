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

  render() {
    return (
      <div className='app'>
        {/* <Controls /> */}
        <Stopwatch
          times={this.state.times}
        />
        {/* <ScoresTable /> */}
        {/* <ClearListButton /> */}
      </div>
    )
  }
}