const path = require('path') // una funzione interna di node che restituisce la directory
const { LoaderOptionsPlugin } = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname, '../scr/script.js'), // dice a webpack quale è il file js da cui partire
    output:
    {
        filename: 'bundle.[contenthash].js',
        path: path.resolve(__dirname, '../dist'),
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../scr/index.html'),
            minify: true
        }), 
        new MiniCssExtractPlugin()],
    module: {
        rules: [{
            //html
            test: /\.html$/,
            use: "html-Loader",
        },
        {
            test: /\.(js)$/,
            //quali file
            exclude: /node_modules/,
            // non trasformare i file di NodeJS
            use: "babel-loader"
            // che loader usare
        },
        {
            // css
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, "css-loader"]
        }
        ]
    } // dice a webpack dove e come creare il file finale, [contenthash] crea un hash univoco per ogni modifica di codice
}