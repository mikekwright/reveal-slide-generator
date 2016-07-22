var path = require('path');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jade$/,
                exclude: [/node_modules/],
                loader: 'jade'
            },
            {
                test: /\.styl$/,
                exclude: [/node_modules/],
                loader: 'style!css!stylus'
            },
            {
                test: /\.css$/,
                exclude: [/node_modules/],
                loader: 'css'
            }
        ]
    }
}
