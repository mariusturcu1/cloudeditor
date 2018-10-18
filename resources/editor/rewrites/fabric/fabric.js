const { fabric } = require("fabric");
const logger = require("../../utils/LoggerUtils");

fabric.Canvas.prototype.renderAll = (function(renderAll) {
  return function() {
    logger.info("myrender");
    return renderAll.call(this);
  };
})(fabric.Canvas.prototype.renderAll);

module.exports = { fabric };
