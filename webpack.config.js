var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
console.log(__dirname);
module.exports = {
    /*context: __dirname,*/
    entry: './src/app.js',

    output: {
        path: './dist',
        filename: 'js/[name]-bound.js'//���ɺ���ļ��� Ϊ a-2ea5b2e9b258a8bbba73.js��main-2ea5b2e9b258a8bbba73.js
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                /*exclude: path.resolve(__dirname, 'node_modules'),*/
                /*include: path.resolve(__dirname, 'src'),//��config�в鿴*/
                query: {
                    presets: ['latest']
                }
            },
            {
                test: /\.css$/,
                loader: 'style!css?importLoaders=1!postcss'  //����˳�� ���ҵ���
            },
            {
                test: /\.less$/,
                loader: 'style!css!postcss!less'
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.tpl$/,
                loader: 'ejs-loader!ejs-html-loader'
            }
        ],
        rules: [
            {
                test: /\.(css|scss|less)$/,
                loader: "style-loader!css-loader?importLoaders=1!postcss-loader"
            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader'
                }]
            },
            {
                test:  /\.(png|jpg|gif|svg)$/i,
                use: [{
                    loader: 'url-loader',//file-loader
                    query:{
                        limit:20,
                        name:'image/[name].[ext]' /*-[hash:5]*/
                    }
                }]
            },
            {
                test: /\.tpl$/,
                loader: 'ejs-loader!ejs-html-loader'
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html', //ͨ��ģ�����ɵ��ļ���
            template: 'index.html',//ģ��·��
            inject: 'body' //�Ƿ��Զ���ģ���ļ���� �Զ����ɵ�js�ļ�����

        })
    ]
};