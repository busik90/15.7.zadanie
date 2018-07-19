class Stopwatch extends React.Component {
  static propTypes = {
    times: React.PropTypes.object.isRequired,
    format: React.PropTypes.func.isRequired
  }

  print = () => {
    return this.props.format(this.props.times);
  }

  render () {
    return (
      <div className='stopwatch'>
        {this.print()}
      </div>
    )
  }
}