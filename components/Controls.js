class Controls extends React.Component {
  static propTypes = {
    isRunning: React.PropTypes.bool.isRequired,
    runningState: React.PropTypes.func.isRequired,
    start: React.PropTypes.func.isRequired,
    reset: React.PropTypes.func.isRequired,
    save: React.PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
  }

  start = () => {
    if (!this.props.isRunning) {
      this.props.runningState(true);
      this.watch = setInterval(() => this.props.start(), 10);
    }
  }

  stop = () => {
    this.props.runningState(false);
    clearInterval(this.watch);
  }

  reset = () => {
    if (!this.props.isRunning) {
      this.props.reset();
    }
  }

  save = () => {
    this.props.save();
  }

  render () {
    return (
      <nav className='controls'>
        <a href='#' className='button' id='start' onClick={this.start}>Start</a>
        <a href='#' className='button' id='stop' onClick={this.stop}>Stop</a>
        <a href='#' className='button' id='reset' onClick={this.reset}>Reset</a>
        <a href='#' className='button' id='save' onClick={this.save}>Save</a>
      </nav>
    )
  }
}