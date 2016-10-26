var React = require('react');


var LoginForm = React.createClass({
render: function(){
  return (
    <div>
      <div className="login-window">
        <label className="la-login" for="userInput">Username</label>
         <input type="text" className="form-control" id="loginInput" placeholder="Enter Username" />
          <br>
         <button type="submit" className="btn btn-primary log-button"><strong>Login</strong></button>
      </div>
    </div>
  )
}
});

var LoginComponent = React.createClass({
  render: function(){
    <TemplateComponent className="col-md-4 col-md-offset-4 well login-box">
      <LoginForm />
    </TemplateComponent>
  }
});

module.exports = {
LoginComponent: LoginComponent
}
