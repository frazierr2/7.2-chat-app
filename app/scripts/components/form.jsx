var React = require('react');
var Backbone = require('backbone');
require('backbone-react-component');

var TemplateComponent = require('./chatTemplate.jsx').TemplateComponent;
var MessageCollection = require('../models/models.js').MessageCollection;

var MessageForm = React.createClass({
  mixins: [Backbone.React.Component.mixin],
// CHECK*******************************
  getInitialState: function(){
    return {
      content: '',
      username: ''
    }
  },
  handleMessage: function(e){
    var content = e.target.value;
    this.setState({content: content});
  },
  handleSubmit: function(e){
      e.preventDefault();

      var timeStamp = {
        content: this.state.content,
        time: new Date().getTime(),
        username: this.props.username
      };
      this.getCollection().create(timeStamp);
      this.setState({content: ''});
  },
  // #######################################
  render: function(){
    return (
      <form onSubmit={this.handleSubmit} className="form-group">
        <label className="la-title" htmlFor="userInput">Message</label>
         <input onChange={this.handleMessage} type="text" className="form-control" value={this.state.content} id="userInput" placeholder="Message" />
         <button type="submit" className="btn btn-primary sub-button"><strong>Send</strong></button>
      </form>
    )
  }
});

var MessageListing = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  render: function(){
    var collection = this.getCollection();
    var groupMessages = collection.map(function(messages){
      return <li key={messages.get('_id') || messages.cid}>
        {messages.get('username')}
        {messages.get('content')}
        {messages.get('time')}
      </li>;
    });
    return (
      <ul className="chat-window">
        {groupMessages}
      </ul>
    );
  }
});

var MessagingComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],

  getDefaultProps: function(){
    var collection = new MessageCollection();
    return {
      collection: collection
    };
  },
  componentWillMount: function(){
    var self = this;
    setInterval(function(){
      self.props.collection.fetch().then(function(){
      self.setState({collection: collection})
      });
    },30000);
  },
  render: function(){
    return (
    <TemplateComponent className="col-md-6 col-md-offset-3 well chat-box">
      <MessageListing />
      <MessageForm username={this.props.username}/>
    </TemplateComponent>
    )
  }
});

module.exports = {
  MessageForm: MessageForm,
  MessageListing: MessageListing,
  MessagingComponent: MessagingComponent
}
