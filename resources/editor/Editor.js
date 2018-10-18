const React = require("react");
const ReactDOM = require("react-dom");
const { AppContainer } = require("react-hot-loader");
const Editor = require("./containers/Editor");
require("./i18n");

const startEditor = (docElement, workspace) => {
  ReactDOM.render(
    <AppContainer>
      <Editor workspace={workspace} />
    </AppContainer>,
    document.getElementById(docElement)
  );
};

module.exports = startEditor;
