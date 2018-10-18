const { shape, oneOf, string, number } = require("prop-types");
const { objectTypes, objectDefaults } = require("./object");
const { merge } = require("ramda");

const imageTypes = shape(
  merge(objectTypes, {
    cacheKey: string,
    cropX: number,
    cropY: number,
    crossOrigin: oneOf(["", "anonymous", "use-credentials"]),
    minimumScaleTrigger: number
  })
);

const imageDefaults = merge(objectDefaults, {
  cacheKey: "",
  cropX: 0,
  cropY: 0,
  type: "image",
  crossOrigin: "",
  minimumScaleTrigger: 0.5
});

module.exports = { imageTypes, imageDefaults };
