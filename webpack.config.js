const path = require('path')

module.exports = {
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'index.js',
        library: 'PMT',
        libraryTarget: 'commonjs',
        libraryExport: 'default'
    },
    target: 'node',
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                            plugins: ['add-module-exports']
                        }
                    }
                ]
            }

        ]
    }
}