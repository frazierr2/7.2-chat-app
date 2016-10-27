var React = require('react');
var Backbone = require('backbone');
require('backbone-react-component');

var TemplateComponent = require('./chatTemplate.jsx').TemplateComponent;

var LoginForm = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  getInitialState: function(){
    return{
      username: ''
    };
  },
  handleUsername: function(e){
  var username = e.target.value;
  this.setState({username: username});
},
handleSubmit: function(e){
  e.preventDefault();
  var router = this.props.router;
  router.username = this.state.username;
  // console.log(router.username);
  router.navigate('chat/', {trigger: true});
  this.setState({username: ''});
},
  render: function(){
    return (

        <form onSubmit={this.handleSubmit} className="login-window">
          <label className="la-login" htmlFor="userInput">Username</label>
           <input onChange={this.handleUsername} type="text" className="form-control" id="loginInput" value={this.state.username} placeholder="Enter Username" />
            <br />
           <button type="submit" className="btn btn-primary log-button"><strong>Login</strong></button>
        </form>

    )
  }
});

var LoginComponent = React.createClass({
  render: function(){
    // console.log('username',this.props.router.username);
    return (
    <TemplateComponent>
    <LoginForm router={this.props.router} className="col-md-4 col-md-offset-4 well login-box" />
    </TemplateComponent>
    )
  }
});

module.exports = {
LoginComponent: LoginComponent
}
