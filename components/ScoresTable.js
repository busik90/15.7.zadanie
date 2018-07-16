class ScoresTable extends React.Component {
  static propTypes = {
    savedScore: React.PropTypes.string.isRequired
  }

  displayNewScore() {
    let liElement = document.createElement('li');

    liElement.innerText = this.props.savedScore;
    this.scoresTable.appendChild(liElement);
  }

  render () {
    return (
      <ul className='scoresTable'></ul>
    )
  }
}