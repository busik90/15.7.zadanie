class ScoresTable extends React.Component {
  static propTypes = {
    scores: React.PropTypes.array.isRequired
  }

  render () {
    return (
      <ul className='scoresTable'>
        { this.props.scores.map(score => <li key={score.id}>{score.value}</li>) }
      </ul>
    )
  }
}