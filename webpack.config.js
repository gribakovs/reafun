var path = require('path');

module.exports = {
    entry: {
        bundle: './src/app.js',
        uikitloader: './src/loaders/uikit.loader.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    }
}