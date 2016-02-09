var Toolbar = React.createClass({
  getInitialState: function() {
    return {cat: this.props.cat};
  },
  toggleActive: function() {
    this.toggle({
      'active': !this.state.cat.active
    });
  },
  toggleFeatured: function() {
    this.toggle({
      'featured': !this.state.cat.featured
    });
  },
  toggle: function(catDiff) {
    var url = '/cats/' + this.state.cat.id + '.json';
    var params = {
      '_method': 'patch',
      'cat': catDiff
    }
    var _this = this
    $.post(url, params, function(data) {
      if (data.success) {
        _this.setState({cat: data.cat})
      } else {
        console.log(data)
      }
    });
  },
  render: function() {
    var featuredTime = this.state.cat.featured ? <FeaturedTime datetime={this.state.cat.featured_on} />: '';
    return (
      <div className="controls">
        <span>
          <ToggleSwitch on={this.state.cat.active} toggleFunction={this.toggleActive} />
          Active
        </span>
        <span>
          <ToggleSwitch on={this.state.cat.featured} toggleFunction={this.toggleFeatured} />
          Featured
        </span>
        {featuredTime}
      </div>
    );
  }
});
