// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

const isProduction = process.env.NODE_ENV == 'production';


const config = {
    entry: './src/js/script.js',
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: 'bundle.js',
    },
    devServer: {
        open: true,
        host: 'localhost',
    },
        watch: true, // Включение режима наблюдения
        watchOptions: {
        ignored: /node_modules/, // Игнорировать изменения в node_modules
    },
    // plugins: [
    //     // new HtmlWebpackPlugin({
    //     //     template: 'index.html',
    //     // }),

    //     // Add your plugins here
    //     // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    // ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                loader: 'babel-loader',
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
        
        
        config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());
        
    } else {
        config.mode = 'development';
    }
    return config;
};
