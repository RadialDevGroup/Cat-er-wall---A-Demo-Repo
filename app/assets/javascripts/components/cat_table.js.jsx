var CatTable = React.createClass({
  getInitialState: function() {
    return {cats: this.props.cats};
  },
  remove: function() {

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
          {this.state.cats.map(function(cat, index) {
            return <CatRow key={index} cat={cat} remove={remove} />;
          })}
        </tbody>
      </table>
    );
  }
});
