var webpack=require('webpack');
var path =require('path');

const config = {
    entry: ['babel-polyfill','./src/index.js'],
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    module: {
        rules: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['react', 'env', 'stage-2']
                }
            }]
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        },
        {
            test: /\.(png|woff|woff2|eot|ttf|svg)$/,
            use: 'url-loader?limit=100000'
        },
        {
            test: /\.png$/,
            use: 'url-loader?limit=100000'
        },
        {
            test: /\.jpg$/,
            use: 'file-loader'
        },
        {
            test: /\.(woff|woff2) (\?v=\d+\.\d+\.\d+)?$/,
            use: 'url-loader?limit=10000&mimetype=application/font-woff'
        },
        {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            use: 'url-loader?limit=10000&mimetype=application/octet-stream'
        },
        {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            use: 'file-loader'
        },
        {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            use: 'url-loader?limit=10000&mimetype=image/svg+xml'
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()      
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        hot: true,
        open: true,
        port: 4200,
        compress: true,
        compress: true,
        inline: true
    }
};

module.exports = config;