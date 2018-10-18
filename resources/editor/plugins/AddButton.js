const React = require("react");
const { connect } = require("react-redux");
const assign = require("object-assign");
const { addObject } = require("../stores/actions/project");
const { changeTheme } = require("../stores/actions/theme");
const ProjectUtils = require("../utils/ProjectUtils");

const emptyImage = ProjectUtils.getEmptyObject({
  type: "image"
});

class AddButton extends React.Component {
  render() {
    return (
      <div>
        <div>Current Theme = {this.props.theme}</div>
        <button onClick={() => this.props.addObjectHandler(emptyImage)}>
          {this.props.title}
        </button>
        <button onClick={() => this.props.changeThemeHandler("dark")}>
          Dark
        </button>
        <button onClick={() => this.props.changeThemeHandler("base")}>
          Base
        </button>
      </div>
    );
  }
}

// let's export the plugin and a set of required reducers

const mapStateToProps = state => {
  return {
    title: state.addButton.title,
    theme: state.theme.theme
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addObjectHandler: object => dispatch(addObject(object)),
    changeThemeHandler: theme => dispatch(changeTheme(theme))
  };
};

const AddButtonPlugin = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddButton);

module.exports = {
  AddButton: assign(AddButtonPlugin, {
    disablePluginIf:
      "{store().getState().project.title==='Empty Project!!@!!@!@'}",
    SideBar: {
      position: 1,
      priority: 1
    }
  }),
  reducers: { addButton: require("../stores/reducers/addButton") }
};
