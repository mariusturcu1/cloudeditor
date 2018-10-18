const React = require("react");
const { Image, IText, Fabric } = require("../../../packages/core/react-fabric");

class FabricjsRenderer extends React.Component {
  render() {
    const { activePage: page } = this.props;
    const { objects } = page;
    let elements = Object.keys(objects).map(obKey => {
      const object = objects[obKey];
      switch (object.type) {
        case "image":
          return (
            <Image
              key={object.id}
              {...object}
              onMoving={this.onMovingHandler}
            />
          );
        case "text":
          return (
            <IText
              key={object.id}
              {...object}
              onMoving={this.onMovingHandler}
            />
          );
        default:
          break;
      }
      return null;
    });

    return (
      <div>
        <div>
          <Fabric width={page.width} height={page.height}>
            {elements}
          </Fabric>
        </div>
      </div>
    );
  }
}

module.exports = FabricjsRenderer;
