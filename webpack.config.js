var config = {
    entry: {
      tomatempo: __dirname + "/src/javascript/tomatempo.jsx",
      trial: __dirname + "/src/javascript/trial.jsx"
    },

    output: {
      path: __dirname + "/build/js",
      filename: "[name].bundle.js"
    },

    resolve: {
      modulesDirectories: ["src", "node_modules", "nodes_modules/material-ui/src", "node_modules/gsap/src/minified"],
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
