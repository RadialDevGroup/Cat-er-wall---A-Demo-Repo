var CatTable = React.createClass({
  mixins: [AjaxMixin],
  getInitialState: function() {
    return {cats: this.props.cats};
  },
  trash: function(id) {
    this.ajaxUpdate(id, 'delete');
  },
  render: function() {
    var trash = this.trash;
    return (
      <table className="uk-table uk-table-striped">
        <thead>
          <tr>
            <th>URL</th>
            <th>Caption</th>
            <th className="uk-text-center">Active</th>
            <th className="uk-text-center">Featured</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.state.cats.map(function(cat) {
            return <CatRow key={cat.id} cat={cat} remove={trash} />;
          })}
        </tbody>
      </table>
    );
  }
});
