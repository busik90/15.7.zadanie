class ClearListButton extends React.Component {
  static propTypes = {
    clearList: React.PropTypes.func.isRequired
  }

  clearList = () => {
    this.props.clearList();
  }

  render() {
    return (
      <a href='#' className='button' id='clearList' onClick={this.clearList}>Clear</a>
    )
  }
}