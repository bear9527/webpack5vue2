const path = require("path")

const HtmlWebpackPlugin = require('html-webpack-plugin')

const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, './src/main.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle-[name].js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.s?css$/,
                use: ['style-loader', 'css-loader','sass-loader']
            },
            {
                test: /\.(png|jpg|gif|jpeg)/,
                loader: 'url-loader',
                options: {
                    limit: 8 * 1024,
                    name: '[hash:10].[ext]',
                    outputPath: 'imgs',
                    esModule:false
                }
            },
            {
                exclude: /\.(html|vue|js|css|scss|jpg|png|gif)/,
                loader: 'file-loader',
                options: {
                    name: '[hash:10].[ext]',
                    outputPath: 'media'
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'index.html'),
            filename: 'index.html'
        }),
        new VueLoaderPlugin()
    ],
    resolve:{
        alias:{
            'vue$':'vue/dist/vue.js',
            '@': path.resolve(__dirname, './src')
        }
    },
    devServer:{
        contentBase: path.resolve(__dirname, './dist'),
        compress: true,
        port:3000,
        // open:true,
        hot:true,
        publicPath: '/'
    }
}
