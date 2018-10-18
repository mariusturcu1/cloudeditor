const logger = require("../utils/LoggerUtils");
const assign = require("object-assign");

let localConfigFile = "localConfig.json";

let defaultConfig = {};
let workspace = null;

const ConfigUtils = {
  getDefaults: function() {
    return defaultConfig;
  },
  setLocalConfigurationFile(file) {
    localConfigFile = file;
  },
  loadConfiguration: params => {
    const configFile = (params && params.configFile) || localConfigFile;
    const workspace = (params && params.workspace) || workspace;
    if (configFile) {
      let config = {};
      if (workspace) {
        config = require("../workspaces/" + workspace + "/" + configFile); //workspace config
      } else {
        config = require("../" + configFile); // global config
      }

      defaultConfig = assign({}, defaultConfig, config);
    }
    return defaultConfig;
  },
  getConfigProp: function(prop) {
    return defaultConfig[prop];
  },
  setConfigProp: function(prop, value) {
    defaultConfig[prop] = value;
  },
  removeConfigProp: function(prop) {
    delete defaultConfig[prop];
  }
};

module.exports = ConfigUtils;
