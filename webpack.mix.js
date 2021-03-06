let mix = require("laravel-mix");

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const EDITOR_WORKSPACE = process.env.MIX_EDITOR_WORKSPACE || "admin";
const cssFilename = "[name].css";

const editorPublicPath = "editor/" + EDITOR_WORKSPACE + "/";

mix.webpackConfig({
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        exclude: [], // For newer versions
        loader: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              options: {
                sourceMap: true
                // modules: true,
                // localIdentName: "[name]__[local]__[hash:base64:5]"
              }
            },
            {
              loader: "sass-loader",
              options: {
                outputStyle: "expanded",
                sourceMap: true
              }
            }
          ]
        })
      },
      {
        // only include svg that doesn't have font in the path or file name by using negative lookahead
        test: /(\.(png|jpe?g|gif)$|^((?!font).)*\.svg$)/,
        loaders: [
          {
            loader: "file-loader",
            options: {
              name: path => {
                if (!/node_modules|bower_components/.test(path)) {
                  console.log(path);
                  const tmp = path.split("resources\\editor\\");
                  const newPath = tmp[1].replace(/\\/g, "/");
                  return editorPublicPath + newPath + "?[hash]";
                }

                return (
                  editorPublicPath +
                  "/vendor/" +
                  path
                    .replace(/\\/g, "/")
                    .replace(
                      /((.*(node_modules|bower_components))|images|image|img|assets)\//g,
                      ""
                    ) +
                  "?[hash]"
                );
              },
              publicPath: "/"
            }
          },

          {
            loader: "img-loader",
            options: Config.imgLoaderOptions
          }
        ]
      },
      {
        test: /\.json$/,
        loader: "json-loader"
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: cssFilename
    })
  ],
  devtool: "source-map"
});

mix.copy("resources/editor/assets", "public/" + editorPublicPath + "assets");
mix.copy("resources/editor/locales", "public/" + editorPublicPath + "locales");

mix.react(
  "resources/editor/index.js",
  "public/editor/" + EDITOR_WORKSPACE + "/index.js"
);

mix.setPublicPath("public");
