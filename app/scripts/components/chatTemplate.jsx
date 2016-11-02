var React = require('react');

var TemplateComponent = React.createClass({
  getDefaultProps: function(){
    return{
      className: "col-md-4"
    }
  },
  render: function(){
    return (
      <div className="contain-box">

        <div className="well banner">The Iron Messenger</div>

        <div className="container">
          <div className="row">
            <div className={this.props.className}>
              {this.props.children}
            </div>
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
