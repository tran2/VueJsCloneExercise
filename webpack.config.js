const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';
const FILENAME = 'bundle';

const config = {
  mode: isProduction ? 'production' : 'development',
  entry: './src/index.js',
  devtool: 'cheap-eval-source-map',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: `${FILENAME}.js`,
    /*  Output - How to set webpack to expose your library to the browser
        reference - https://webpack.js.org/configuration/output/

      ~~~~   AMD - require.js ~~~~~~
      Uncomment the following properties
    */
    // library: 'LibraryName',
    // libraryTarget: 'amd',
    /*
      Then add Require.js and the bundle script to your webpage
      <script src="path-to/require.js"></script>
      <script src="dist/bundle.min.js"></script>
      Use your library like

      require(['LibraryName'], function(myLibrary) {
        // Do something with the library...
        console.log(myLibrary.add(2, 2));
      });

      ~~~~   UMD ~~~~~
      Uncomment the following properties
    */
    // library: 'LibraryName',
    // libraryTarget: 'umd',
    // umdNamedDefine: true,
    /*
      Then add the bundle script to your webpage and use it
      <script src="dist/bundle.min.js"></script>
      <script>
        console.log(LibraryName.add(2, 2));
      </script>
    */
  },
  devServer: {
    publicPath: '/public/',
    contentBase: path.join(__dirname, 'public'),
    index: 'index.html',
  },
  resolve: {
    extensions: ['.js', '.json'],
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true,
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: './index.html',
    }),
  ],
};

if (isProduction === true) {
  config.devtool = false;
  config.output.filename = `${FILENAME}.min.js`;
}

module.exports = config;
