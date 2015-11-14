var webpack = require('webpack');

module.exports = {
    entry: {
        app: "./index.js"
    },
    output: {
        path: '../build',
        filename: 'bundle.js'

    },
    externals: {
        // require("jquery") is external and available
        //  on the global var jQuery
        "jquery": "jQuery",
        "$": "jQuery",
        "angular":"angular"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ["ng-annotate", "babel?presets[]=es2015&cacheDirectory=true"]
            }
        ]
    },
    plugins: [
       //  new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"common", /* filename= */"common.js"),
       //  new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"angular", /* filename= */"angular.bundle.js")
        //,new webpack.optimize.UglifyJsPlugin()
    ]
};