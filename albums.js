var couchapp = require('couchapp'),
    path = require('path');

var ddoc = module.exports = {
  _id: '_design/rest',
  rewrites: [],
  views: {
    all: {
      map: function (doc) {
        emit(doc._id, doc);
      }
    }
  },
  lists: {},
  shows: {}
};
