const path = require("path")

const HtmlWebpackPlugin = require('html-webpack-plugin')

const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

//设置nodejs的环境变量
// process.env.NODE_ENV = 'production';

module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, './src/main.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'js/bundle-[name].[contenthash:10].js',
        chunkFilename: 'js/[name]_chunk.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.s?css$/,
                use: [{
                    loader:MiniCssExtractPlugin.loader,
                    options:{
                        publicPath: '/'
                    }
                }, 'css-loader', 
                {
                    loader: 'postcss-loader'
                },
                'sass-loader']
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
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,    //不匹配的目录
                // enforce: 'pre', //post延后执行
                include: path.resolve(__dirname, 'src'), //匹配的目录
                use:{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    useBuiltIns: 'usage',
                                    corejs: 3,
                                    targets: {
                                        chrome: '60',
                                        firefox: "60",
                                        ie: '9',
                                        safari: '10',
                                        edge: '17'
                                    }
                                }
                            ]
                        ],
                        //利用 @babel/plugin-transform-runtime 插件还能以沙箱垫片的方式防止污染全局， 并抽离公共的 helper function , 以节省代码的冗余
                        "plugins": [
                            [
                                "@babel/plugin-transform-runtime",
                                {
                                    "corejs": 3
                                }
                            ]
                        ],
                        // 开启babel缓存
                        // 第二次构建时，会读取之前的缓存
                        cacheDirectory: true
                    }
                }
            }
        ]
    },
    cache: {
        type: 'memory'
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'index.html'),
            filename: 'index.html',
            title: 'webpack5 vue2.6',
            minify: {
                collapseWhitespace: true,
                removeComments: true
            }
        }),
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: '[id].css'
        }),
        new OptimizeCssAssetsPlugin(),
        new CleanWebpackPlugin()
    ],
    //解析模块的规则
    resolve:{
        alias:{
            'vue$':'vue/dist/vue.js',
            '@': path.resolve(__dirname, './src')
        },
        extensions: ['.js', '.json', '.jsx', '.vue'],
    },
    optimization: {
        //分割代码
        splitChunks: {
            chunks: 'all'
        },
        //将当前模块 记录其他模块的hash单独打包为一个文件 runtime
        //解决：修改a文件导致b文件的contenthash的变化
        runtimeChunk: {
            name: entryPoint =>  `runtime-${entryPoint.name}`
        }
    }
}
