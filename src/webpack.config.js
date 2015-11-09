var webpack = require('webpack');

module.exports = {
    entry: {
        app: "./app/app.js"
        //vendor: ["jquery","angular"],
    },
    output: {
        path: '../build',
        filename: 'bundle.js',

    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel",
                query: {
                    cacheDirectory: true,
                    presets: ['es2015']
                }
            }
        ]
    },
    plugins: [
        // new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
        //,new webpack.optimize.UglifyJsPlugin()
    ]
};