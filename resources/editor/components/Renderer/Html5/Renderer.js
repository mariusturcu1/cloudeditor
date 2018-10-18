const React = require("react");

class Html5Renderer extends React.Component {
  render() {
    return <div>Html5Renderer -> {this.props.children}</div>;
  }
}

module.exports = Html5Renderer;
