var Add = function(a,b) {return a/1 + b/1;};
var Average = function(array) {return array.reduce(Add) / array.length;};

GraphDemo = React.createClass({
  getInitialState: function() {
    return {scores: [2, 4, 3, 1, 2, 2]};
  },
  updateScore: function(e) {
    console.log(e)
    var scores = this.state.scores;
    scores[e.target.getAttribute('data-index')] = e.target.value;
    this.setState({scores: scores});
  },
  render: function() {
    var goal = 2;
    var averageLevel = Average(this.state.scores);
    var levels = ['kitten', 'cat', 'tiger', 'lion'];
    var updateScore = this.updateScore;
    return (
      <div>
        <div className="uk-grid uk-grid-width-1-6">
          {this.state.scores.map(function(score, index) {
            return (<div>
              <input key={index} type="number" value={score} onChange={updateScore} data-index={index} className="uk-form-large" />
            </div>);
          })}
        </div>
        <ScoreGraph data={this.state.scores} averageLevel={averageLevel} goal={goal} levels={levels} xLabel="Feline" />
      </div>
    );
  }
});
