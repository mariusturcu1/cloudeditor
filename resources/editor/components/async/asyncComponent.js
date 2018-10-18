const React = require("react");

const asyncCompoment = importComponent => {
  return class extends React.Component {
    state = {
      component: null
    };

    componentDidMount() {
      importComponent().then(cmp => {
        this.setState({ component: cmp.default });
      });
    }

    render() {
      const C = this.state.component;
      return C ? <C {...this.props} /> : null;
    }
  };
};

module.exports = asyncCompoment;
