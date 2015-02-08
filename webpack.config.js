module.exports = {
    entry: "./src/tomatempo.jsx",
    output: {
        path: "./build",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.jsx$/, loader: "jsx-loader?harmony" },
            { test: /\.less$/, loader: "style-loader!css-loader!less-loader" }
        ]
    }
};
