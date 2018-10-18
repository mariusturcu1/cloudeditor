const { combineReducers } = require("../utils/PluginsUtils");
const { createDebugStore } = require("../utils/DebugUtils");

module.exports = (
  initialState = { defaultState: {}, mobile: {} },
  appReducers = {},
  plugins = {}
) => {
  const rootReducer = combineReducers(plugins, {
    ...appReducers,
    project: require("../stores/reducers/project")
  });

  const defaultState = initialState.defaultState;

  const store = createDebugStore(rootReducer, defaultState);
  return store;
};
