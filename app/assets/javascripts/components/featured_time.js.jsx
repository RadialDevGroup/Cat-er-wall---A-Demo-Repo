//=require 'time_ago_in_words'

var FeaturedTime = React.createClass({
  getInitialState: function() {
    return {
      datetime: this.props.datetime,
      startTime: new Date()
    };
  },
  componentDidMount: function() {
    this.updateDatetime()
  },
  updateDatetime: function() {
    var featured_time = this;
    setTimeout(function() {
      var newDatetime = new Date(featured_time.props.datetime) + (new Date() - featured_time.state.startTime);
      featured_time.setState({datetime: new Date(newDatetime)});
      featured_time.updateDatetime();
    }, 1000);
  },
  render: function() {
    return (
      <span>
        <span className="featured-time">
          {time_ago_in_words(this.state.datetime)}
        </span>
      </span>
    );
  }
});
