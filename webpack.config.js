const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        // new HtmlWebpackPlugin({
        //     template: './src/people.html',
        //     filename: 'people.html',
        // }),
        // new HtmlWebpackPlugin({
        //     template: './src/services.html',
        //     filename: 'services.html',
        // }),
        // new HtmlWebpackPlugin({
        //     template: './src/products.html',
        //     filename: 'products.html',
        // })
    ],
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(woff|woff2|ttf|otf|eot)$/,
                type: 'asset/resource',
                dependency: { not: ['url'] },
            }
        ]
    }
};
