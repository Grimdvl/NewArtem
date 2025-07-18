const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const isProduction = process.env.NODE_ENV == 'production';
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

const config = {
    entry: './src/assets/js/script.js',
    output: {
        path: path.resolve(__dirname, 'dist/assets/js'),
        filename: 'bundle.js',
        library: {
            type: 'window',
            name: 'MyBundle',
        },
    },
    devServer: {
        open: true,
        host: 'localhost',
    },
    watch: true,
    watchOptions: {
        ignored: /node_modules/,
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [['@babel/preset-env', {
                            debug: true,
                            corejs: 3,
                            useBuiltIns: "usage"
                        }]]
                    }
                }
            },
            {
                test: /\.(js|jsx)$/i,
                loader: 'babel-loader',
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },
        ],
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()]
    },
    plugins: [] // ✅ ДОДАНО сюди
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
        config.plugins.push(new WorkboxWebpackPlugin.GenerateSW()); // тепер працює
    } else {
        config.mode = 'development';
    }
    return config;
};
