var CatRow = React.createClass({
  mixins: [AjaxMixin],
  getInitialState: function() {
    return {cat: this.props.cat};
  },
  delete: function() {
    this.setState({removed: true})
    this.props.remove(this.state.cat.id);
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
          <a className='uk-button uk-button-danger' onClick={this.delete}>
            <i className="uk-icon-trash"></i> Delete
          </a>
        </td>
      </tr>
    );
  }
});
