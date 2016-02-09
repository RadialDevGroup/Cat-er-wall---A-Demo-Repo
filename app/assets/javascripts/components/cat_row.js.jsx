var CatRow = React.createClass({
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
  remove: function() {
    this.setState({removed: true})
    this.props.remove(this.state.cat.id);
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
    var cat = this.state.cat;
    var className = this.state.removed ? 'removed' : '';
    var catShow = '/cats/' + cat.id;
    var featuredTime = cat.featured ? <FeaturedTime datetime={cat.featured_on} />: '';
    return (
      <tr className={className}>
        <td><a href={catShow}>{cat.url}</a></td>
        <td>{cat.caption}</td>
        <td className="status">
          <ToggleSwitch on={cat.active} toggleFunction={this.toggleActive} />
        </td>
        <td className="status">
          <ToggleSwitch on={cat.featured} toggleFunction={this.toggleFeatured} />
        </td>
        <td>
          {featuredTime}
        </td>
        <td className="uk-button-group">
          <a href={catShow + '/edit'} className='uk-button'>
            <i className="uk-icon-edit"></i> Edit
          </a>
          <a className='uk-button uk-button-danger' onClick={this.remove}>
            <i className="uk-icon-trash"></i> Delete
          </a>
        </td>
      </tr>
    );
  }
});
