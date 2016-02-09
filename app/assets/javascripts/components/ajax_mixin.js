var AjaxMixin = {
  toggleActive: function() {
    this.ajaxUpdate(this.state.cat.id, 'patch', {'cat': {'active': !this.state.cat.active}});
  },
  toggleFeatured: function() {
    this.ajaxUpdate(this.state.cat.id, 'patch', {'cat': {'featured': !this.state.cat.featured}});
  },
  remove: function(cat) {
    this.ajaxUpdate(cat.id, 'delete');
  },
  ajaxUpdate: function(id, method, params) {
    var url = '/cats/' + id;
    var _this = this;
    $.post(url, $.extend({'_method': method}, params)).done(function(data, status, xhr) {
      console.log(data)
      if (data.success) {
        if (data.cats) {
          _this.setState({ cats: data.cats });
        } else if (data.cat) {
          _this.setState({ cat: data.cat });
        }
      } else {
        _this.handleAjaxError(data)
      }
    });
  },
  handleAjaxError: function(data) {
    if (data.redirect) {
      if (data.redirect === "back") {
        UIkit.notify({
          message : data.error,
          status  : 'danger',
          pos     : 'top-center'
        });
      } else {
        window.location = data.redirect;
      }
    }
  }
};
