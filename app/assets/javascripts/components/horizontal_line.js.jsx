HorizontalLine = React.createClass({
  render: function() {
    var pathString = "M " + this.props.xStart + " " + this.props.y + " L " + this.props.xEnd + " " + this.props.y;
    return <path id={this.props.id} d={pathString} />;
  }
});
