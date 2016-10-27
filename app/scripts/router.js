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
  this.username = '';
},
index: function(){
    ReactDOM.render(
      React.createElement(LoginComponent, {router: this}),
      document.getElementById('app')
    );
  },
chat: function(){
  var collection = new MessageCollection();
  setInterval(function(){
    collection.fetch().then(function(){
      self.setState({collection: collection})
    });
  },30000)

  ReactDOM.render(
    React.createElement(MessagingComponent, {collection: collection, username: this.username}),
    document.getElementById('app')
  );
}
});

var router = new AppRouter();

module.exports = router;
