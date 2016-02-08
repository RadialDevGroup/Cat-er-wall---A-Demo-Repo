var ToggleSwitch = React.createClass({
  getInitialState: function() {
    return {loading: false};
  },
  toggle: function() {
    this.setState({loading: true});
    this.props.toggleFunction(this);
  },
  render: function() {
    toggleClass = 'switch ';
    toggleClass += this.props.on ? 'on' : 'off';
    if (this.state.loading === true) {
      toggleClass += ' loading'
    }

    return (
      <div className={toggleClass} onClick={this.toggle}>
        <div className="toggle"></div>
      </div>
    );
  }
});
