const { CHANGE_RENDERER_TYPE } = require("../actionTypes/renderer");
const { handleActions } = require("redux-actions");

const initialState = {
  type: "fabricjs"
};

module.exports = handleActions(
  {
    [CHANGE_RENDERER_TYPE]: (state, action) => {
      return {
        ...state,
        type: action.payload
      };
    }
  },
  initialState
);
