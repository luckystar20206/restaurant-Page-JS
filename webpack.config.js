const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js", 

    output: {
        filename: "main.js"
    }, 
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Restaurant page'
        }),
    ]

}