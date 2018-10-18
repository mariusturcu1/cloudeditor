const actionTypes = require("../actionTypes/renderer");
const { createAction } = require("redux-actions");

// const changeRendererType = rendererType => {
//   return {
//     type: actionTypes.CHANGE_RENDERER_TYPE,
//     rendererType: rendererType
//   };
// };

const changeRendererType = createAction(
  actionTypes.CHANGE_RENDERER_TYPE
);

module.exports = {
  changeRendererType
};
