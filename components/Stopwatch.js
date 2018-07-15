class Stopwatch extends React.Component {
  static propTypes = {
    times: React.PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
  }

  print = () => {
    return this.format(this.props.times);
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