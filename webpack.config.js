const path = require('path')

module.exports = {
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'pmt.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                ]
            }

        ]
    }
}