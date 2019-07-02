var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var config = require('./build.config.js');
var APP_DIR = __dirname + '/' + config.sourceDirectory;
var BUILD_DIR = __dirname + '/' + config.buildDirectory;
var TEST_DIR = __dirname + '/' + config.testDirectory;
var TEMPLATE_BUILD_DIR = __dirname + '/' + config.templateBuildDirectory; // Templates refer to Quick Commerce JSX templates
var TEMPLATE_SOURCE_DIR = __dirname + '/' + config.templateSourceDirectory; // Templates refer to Quick Commerce JSX templates

// TODO: Env vars
var domainName = 'phobulousedmonton.com';
//var domainName = '68.183.205.157';
var wwwPrefix = (domainName === 'localhost' || /[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}/.test(domainName)) ? '' : 'www.';
var baseUri = 'http://' + wwwPrefix + domainName + '/';

var env = {
  QC_SETTING_STORAGE_DRIVER: JSON.stringify('normal'), // Options: [file|uri|text]
  QC_SETTING_ADAPTER: JSON.stringify('qc'), // Options: [qc|custom|...]
  API_VERSION: JSON.stringify('normal'),
  API_TARGET: JSON.stringify('normal'),
  AUTH_MODE: JSON.stringify('mock'), // [normal|legacy|mock]
  QC_APP_IMAGES_PATH: JSON.stringify('img/'), // Relative path to catalog image folder
  QC_APP_URI: JSON.stringify(baseUri + ''),
  QC_IMAGES_URI: JSON.stringify(baseUri + 'image/'),
  QC_IMAGES_PATH: JSON.stringify('image/'), // Relative path to catalog image folder
  QC_BASE_URI: JSON.stringify(baseUri + ''),
  QC_LEGACY_API: JSON.stringify(baseUri + 'api/rest/'),
  QC_RESOURCE_API: JSON.stringify(baseUri + 'qcapi/api/res/'),
  QC_API: JSON.stringify(baseUri + 'qcapi/api/v1/')
};

// Are we connected to a QuickCommerce installation?
//var QCAPI = false

module.exports = [{
  entry: {
    qcShop001: TEMPLATE_SOURCE_DIR + '/qc-shop-001/qc-shop-001.jsx'
  },
  output: {
    path: BUILD_DIR + '/js',
    filename: '[name]-bundle.js',
    publicPath: '/',
    chunkFilename: '[chunkhash].js'
  },
  devServer: {
    host: '0.0.0.0', // Required for docker
    contentBase: BUILD_DIR,
    watchContentBase: true,
    compress: true,
    port: 9001
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules\/(?!quickcommerce-react)/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
          presets: [
            'react',
            'es2015',
            //['es2015', { 'modules': false }],
            'stage-0',
            'flow'
          ],
          plugins: [
            'transform-decorators-legacy',
            'transform-class-properties',
            // Without this, expect.js test utils fail - some sort of conflict with Babel
            'transform-remove-strict-mode',
            'transform-es3-member-expression-literals',
            'transform-es3-property-literals',
            'add-module-exports'
          ]
        }
      },
      {
        test: /\.css$/, loader: 'style-loader!css-loader'
      },
      {
        test: /\.scss$/, loader: 'style-loader!sass-loader!css-loader'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin(env),
    new CopyWebpackPlugin([
      {
        from: 'static',
        to: BUILD_DIR,
      },
    ]),
  ],
  externals: {
    jquery: 'jQuery'
  },
  resolve: {
    //root: path.resolve(__dirname),
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      'qc-react': 'quickcommerce-react/src/js',
      'masonry': 'masonry-layout',
      'isotope': 'isotope-layout'
    }
  }
}];
