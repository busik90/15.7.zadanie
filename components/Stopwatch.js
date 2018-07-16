class Stopwatch extends React.Component {
  static propTypes = {
    times: React.PropTypes.object.isRequired,
    saveState: React.PropTypes.bool.isRequired,
    saveScore: React.PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
  }

  print = () => {
    let currentTime = this.format(this.props.times);
    if (this.props.saveState) { this.props.saveScore(currentTime); };
    return currentTime;
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

  render () {
    return (
      <div className='stopwatch'>
        {this.print()}
      </div>
    )
  }
}