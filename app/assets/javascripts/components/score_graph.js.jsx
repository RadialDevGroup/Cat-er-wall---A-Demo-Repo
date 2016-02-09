var GRAPH_MARGIN = 10;
var GRAPH_HEIGHT = 200;
var GRAPH_WIDTH = 250;
var GRAPH_LEFT_OFFSET = 100;
var GRAPH_RIGHT_OFFSET = GRAPH_LEFT_OFFSET + GRAPH_WIDTH + 2*GRAPH_MARGIN;

ScoreGraph = React.createClass({
  levelHeight: function(level) {
    var levelHeight = GRAPH_HEIGHT/this.props.levels.length;
    return GRAPH_HEIGHT - (level-0.5)*levelHeight;
  },
  render: function() {
    var questionWidth = GRAPH_WIDTH/this.props.data.length;
    var levelHeight = this.levelHeight;
    var goalHeight = levelHeight(this.props.goal) + 1;
    var scoreHeight = levelHeight(this.props.averageLevel);
    var labelCollisionOffset = 0;
    var lineCollisionOffset = 0;
    var averageIndicator;

    if (this.props.averageLevel) {
      if (Math.abs(scoreHeight - goalHeight) < 10) {
        var sign = (scoreHeight <= goalHeight) ? 1 : -1;
        lineCollisionOffset = 1*sign;
        labelCollisionOffset = 5*sign;
      }

      averageIndicator = (
        <g>
          <HorizontalLine id="score-line" y={scoreHeight - lineCollisionOffset} xStart={GRAPH_LEFT_OFFSET+GRAPH_MARGIN} xEnd={GRAPH_RIGHT_OFFSET-GRAPH_MARGIN} />
          <text id="score-label" y={scoreHeight - labelCollisionOffset} x={GRAPH_RIGHT_OFFSET}>Average Level</text>
        </g>
      );
    }
    var scorePlot = this.props.data.map(function(score, i) {
        if (score > 0) {
          var x = GRAPH_LEFT_OFFSET + GRAPH_MARGIN + i*(questionWidth) + questionWidth/2;
          var y = levelHeight(score);
          var command = i == 0 ? "M" : (i == 1 ? "L" : undefined);
          return [command, x, y].join(" ");
        }
      }).join(" ");
    return (
      <div className="score">
        <svg className="score-graph" viewBox={"0 0 " + (GRAPH_RIGHT_OFFSET + 120) + " " + (GRAPH_HEIGHT + GRAPH_MARGIN*2)} preserveAspectRatio="xMinYMin meet" xmlns="http://www.w3.org/2000/svg">
          <path id="graph-bounds" d={"M " + (GRAPH_LEFT_OFFSET + GRAPH_MARGIN) + " 0 L " + (GRAPH_LEFT_OFFSET + GRAPH_MARGIN) + " " + GRAPH_HEIGHT + " L " + (GRAPH_RIGHT_OFFSET - GRAPH_MARGIN) + " " + GRAPH_HEIGHT } />
          {this.props.data.map(function(score, i) {
            var x = GRAPH_LEFT_OFFSET + GRAPH_MARGIN + i*(questionWidth) + questionWidth/2;
            return <text className="question-number" x={x} y={GRAPH_HEIGHT + GRAPH_MARGIN*2} textAnchor="middle">{i+1}</text>;
          })}
          <text className="question-number" x={GRAPH_LEFT_OFFSET + GRAPH_MARGIN + GRAPH_WIDTH/2} y={GRAPH_HEIGHT + GRAPH_MARGIN*4} textAnchor="middle">{this.props.xLabel}</text>

          {this.props.levels.map(function(level, i) {
            return <text className="level-label" x={GRAPH_LEFT_OFFSET} y={levelHeight(i+1)} textAnchor="end">{level}</text>;
          })}

          <HorizontalLine id="goal-line" y={goalHeight + lineCollisionOffset} xStart={GRAPH_LEFT_OFFSET+GRAPH_MARGIN} xEnd={GRAPH_RIGHT_OFFSET-GRAPH_MARGIN} />
          <text id="goal-label" y={goalHeight + labelCollisionOffset} x={GRAPH_RIGHT_OFFSET}>Goal</text>
          {averageIndicator}

          <path id="score-plot" d={scorePlot} />
          {this.props.data.map(function(score, i) {
            if (score > 0) {
              var x = GRAPH_LEFT_OFFSET + GRAPH_MARGIN + i*(questionWidth) + questionWidth/2;
              var y = levelHeight(score);
              return <circle className="question-score" cx={x} cy={y} r="10" />;
            }
          })}
        </svg>
      </div>
    );
  }
});
