const { createStore, compose, applyMiddleware } = require("redux");
const thunkMiddleware = require("redux-thunk").default;

const DebugUtils = {
  createDebugStore: function(reducer, initialState, userMiddlewares) {
    const composeEnhancers =
      process.env.NODE_ENV !== "production" &&
      typeof window === "object" &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose;

    let middlewares = [thunkMiddleware].concat(userMiddlewares || []);

    const store = createStore(
      reducer,
      composeEnhancers(applyMiddleware.apply(null, middlewares))
    );
    return store;
  }
};

module.exports = DebugUtils;
