const webpack = require("webpack");
const ES5to3OutputPlugin = require("es5to3-webpack-plugin");

module.exports = {
    // エントリーポイントの指定
    entry: './src/main.js',
    // ファイルの出力設定
    output: {
        // 出力先のフォルダー名
        path: `${__dirname}/build`,
        // 出力ファイル名
        filename: 'bundle.js'
    },

    module: {
        rules: [
        {
            // 拡張子 .js の場合
            test: /\.js$/,
            use: [
            {
                // Babel を利用する
                loader: 'babel-loader',
                // Babel のオプションを指定する
                options: {
                    presets: [
                        // env を指定することで、ES2017 を ES5 に変換。
                        // {modules: false}にしないと import 文が Babel によって CommonJS に変換され、
                        // webpack の Tree Shaking 機能が使えない
                        ['env', {'modules': false}]
                    ]
                }
            }
            ]
        }
        ]
    },


    // ソースマップを有効にする
    devtool: 'source-map',

    // ローカル開発用環境を立ち上げる
    // ブラウザで http://localhost:8081/ でアクセスできるようになる
    devServer: {
        contentBase: 'build',
        port: 8089
    },

    plugins: [
        // // // JSファイルのminifyを実行する
        new webpack.optimize.UglifyJsPlugin({
            // minify時でもソースマップを利用する
            sourceMap: true
        }),

        // // ES5 -> ES3
        new ES5to3OutputPlugin(),
    ]
};
