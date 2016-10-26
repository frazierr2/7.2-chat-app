var React = require('react');
var Backbone = require('backbone');
require('backbone-react-component');

var MessageForm = React.createClass({
  render: function(){
    return (
      <form className="form-group">
        <label className="la-title" for="userInput">Message</label>
         <input type="text" className="form-control" id="userInput" placeholder="Message" />
         <button type="submit" className="btn btn-primary sub-button"><strong>Send</strong></button>
      </form>
    )
  }
});

var MessageListing = React.createClass({
  render: function(){
    return (
      <div className="chat-window"></div>
    )
  }
});

var MessagingComponent = React.createClass({
  render: function(){
    <TemplateComponent className="col-md-6 col-md-offset-3 well chat-box">
      <MessageForm />
      <MessageListing />
    </TemplateComponent>
  }
});

module.exports = {
  MessageForm: MessageForm,
  MessageListing: MessageListing,
  MessagingComponent: MessagingComponent
}
