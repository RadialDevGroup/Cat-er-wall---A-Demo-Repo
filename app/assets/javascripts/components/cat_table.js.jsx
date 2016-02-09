var CatTable = React.createClass({
  getInitialState: function() {
    return {cats: this.props.cats};
  },
  remove: function(id) {
    var _this = this;

    $.post('/cats/' + id, {_method: 'delete'}).done(function(data) {
      _this.setState({ cats: data.cats });
    });
  },
  render: function() {
    var remove = this.remove;
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
            return <CatRow key={cat.id} cat={cat} remove={remove} />;
          })}
        </tbody>
      </table>
    );
  }
});
