var Toolbar = React.createClass({
  mixins: [AjaxMixin],
  getInitialState: function() {
    return {cat: this.props.cat};
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
