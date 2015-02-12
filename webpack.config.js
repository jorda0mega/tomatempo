var config = {
    entry: {
      tomatempo: __dirname + "/src/javascript/tomatempo.jsx"
    },

    output: {
      path: __dirname + "/build/js",
      filename: "[name].bundle.js"
    },

    resolve: {
      modulesDirectories: ["src", "node_modules", "nodes_modules/material-ui/src"],
      extensions: ["", ".jsx", ".js"]
    },

    module: {
        loaders: [
            { test: /\.jsx$/, loader: "jsx-loader?harmony" },
            { test: /\.less$/, loader: "style-loader!css-loader!less-loader" },
            { test: /\.eot$/, loader: "file-loader" }
        ]
    }
};

module.exports = config;
