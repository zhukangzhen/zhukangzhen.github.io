
// Template version: 1.3.1


const path = require('path')

module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},

  
    host: 'localhost', 
    port: 8080, 
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, 

    
    useEslint: false,
   
    // in the browser.
    showEslintErrorsInOverlay: false,

    

    
    devtool: 'cheap-module-eval-source-map',

    
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: './',

   

    productionSourceMap: true,
    
    devtool: '#source-map',

    
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
