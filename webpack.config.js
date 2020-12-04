const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
       index: "./src/index.js"
    }, 

    output: {
        filename: "main.js"
    },

    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Restaurant page'
        }),
    ]

}