var React = require('react');

var TemplateComponent = React.createClass({
  render: function(){
    return (
      <div class="contain-box">
        
        <div class="well banner">The Iron Messenger</div>

        <div class="container">
          <div class="row">

              {this.props.children}

          </div>
        </div>

        <footer class="well bottom-banner"></footer>
      </div>
    );
  }
});

module.exports = {
  TemplateComponent: TemplateComponent
}
