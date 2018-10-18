const { shape } = require("prop-types");
const { textTypes, textDefaults } = require("./text");
const { merge } = require("ramda");

const ITextTypes = shape(merge(textTypes, {}));

const ITextDefaults = merge(textDefaults, {
  type: "itext",
  fontSize: 120
});

module.exports = { ITextTypes, ITextDefaults };
