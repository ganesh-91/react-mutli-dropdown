// var webpack = require("webpack");
var path = require("path");

var APP_DIR = path.resolve(__dirname, "src/app");
// @TODO :- try to move this out of src
// create a new dist folder as sibling of src
var BUILD_DIR = path.resolve(__dirname, "src/public");

var config = {
    entry: APP_DIR + "/index.jsx",
    output: {
        path: BUILD_DIR,
        filename: "bundle.js",
        libraryTarget: "commonjs2"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                // exclude: /node_modules/,
                include: APP_DIR,
                loader: "babel"
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
        ]
    },
    devServer: {
        port: 5001,
        contentBase: "src"
    }
};

module.exports = config;
