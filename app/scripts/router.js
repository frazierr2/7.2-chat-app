var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');

var LoginComponent = require('./components/login.jsx').LoginComponent;
var MessagingComponent = require('./components/form.jsx').MessagingComponent;
var MessageCollection = require('./models/models.js').MessageCollection;

var AppRouter = Backbone.Router.extend({
  routes: {
  '': 'index',
  'chat/': 'chat'
},
initialize: function(){
  this.username = ''
}
});

var router = new AppRouter();

module.exports = router;
