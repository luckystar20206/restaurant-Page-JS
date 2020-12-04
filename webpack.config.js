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
          {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader',
              },
            ],
          },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Restaurant page'
        }),
    ]

}