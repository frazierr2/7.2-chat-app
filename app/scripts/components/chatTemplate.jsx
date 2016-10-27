var React = require('react');

var TemplateComponent = React.createClass({
  render: function(){
    return (
      <div className="contain-box">

        <div className="well banner">The Iron Messenger</div>

        <div className="container">
          <div className="row">

              {this.props.children}

          </div>
        </div>

        <footer className="well bottom-banner"></footer>
      </div>
    );
  }
});

module.exports = {
  TemplateComponent: TemplateComponent
}
