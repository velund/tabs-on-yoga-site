let path = require('path');
const { dirname } = require('path');
module.exports= {
    mode: 'production',
    entry: './src/js/script.js',
    output: {
        filename: 'mainScript.js',
        path: __dirname + '/dist/js'
    },
    devtool: 'source-map',
    watch: true

};