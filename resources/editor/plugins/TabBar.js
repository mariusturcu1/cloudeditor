const React = require("react");
const { connect } = require("react-redux");
const tabBarActions = require("../stores/actions/tabBar");
const assign = require("object-assign");

class TabBar extends React.Component {
  render() {
    const images = this.props.images.map(image => {
      return (
        <img
          key="x"
          src={image.src}
          width={image.width}
          height={image.height}
        />
      );
    });
    return (
      <div className="tabBar">
        {images}
        {this.props.expanded ? 1 : 0}
        <button onClick={this.props.toogleTabBarHandler}>toogle</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    expanded: state.tabBar.expanded,
    images: state.addButton.images
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toogleTabBarHandler: () => {
      dispatch(tabBarActions.toogleTabBar());
    }
  };
};

const TabBarPlugin = connect(
  mapStateToProps,
  mapDispatchToProps
)(TabBar);

// let's export the plugin and a set of required reducers
module.exports = {
  TabBar: assign(TabBarPlugin, {
    SideBar: {
      position: 2,
      priority: 1
    }
  }),
  reducers: {
    tabBar: require("../stores/reducers/tabBar"),
    theme: require("../stores/reducers/theme")
  }
};
