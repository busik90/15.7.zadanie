class Controls extends React.Component {
  static propTypes = {
    isRunning: React.PropTypes.bool.isRequired,
    runningState: React.PropTypes.func.isRequired,
    start: React.PropTypes.func.isRequired
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

  render () {
    return (
      <nav className='controls'>
        <a href='#' className='button' id='start' onClick={() => this.start()}>Start</a>
        <a href='#' className='button' id='stop' >Stop</a>
        <a href='#' className='button' id='reset' >Reset</a>
        <a href='#' className='button' id='save' >Save</a>
      </nav>
    )
  }
}