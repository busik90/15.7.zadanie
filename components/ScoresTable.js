class ScoresTable extends React.Component {
  static propTypes = {
    score: React.PropTypes.string.isRequired
  }

  addScore = () => {
    let liElem = document.createElement('li');
    liElem.innerText = this.props.score;
    document.querySelector('.scoresTable').appendChild(liElem);
    console.log(this.props.score);
  }

  render () {
    return (
      <ul className='scoresTable'></ul>
    )
  }
}