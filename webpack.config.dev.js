const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin =  require('mini-css-extract-plugin');


module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js','.jsx'],
        alias: {
			// '@components':path.resolve(__dirname, 'src/components/'),
            '@icons':path.resolve(__dirname, 'src/assets/images/icons/'),
			'@logos':path.resolve(__dirname, 'src/assets/images/logos/'),
            '@styles':path.resolve(__dirname, 'src/styles/'),
            '@images': path.resolve(__dirname, 'src/assets/images/'),
            // '@fonts': path.resolve(__dirname, 'src/assets/fonts'),
            // '@assets': path.resolve(__dirname, 'src/assets/')
        }
    },
    mode:'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.html$/,
                use:[
                    {
                        loader:'html-loader',
                    }
                ]
            },
            {
                test: /\.s?[ac]ss$/,
                // /\.(css|scss)$/
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    // 'svg-inline-loader',
                    // '@svgr/webpack',
                    // 'svg-url-loader',
                  {
                    loader: 'file-loader',
                  },
                ],
            },

        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename:'[name].css'
        }),
    ],
    devServer: {
        static: {
        directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 8080,
        open: true,
        hot: false, // optional, but you must not set both hot and liveReload to true
        liveReload: true
    }
}