/**
 * Created by nchilina on 27/12/16.
 */
var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');

var webpackConf = require('./webpack.config');

gulp.task('webpack', function() {
  var webpackBundler = webpack(webpackConf);
  var webpackChangeHandler = function(err, stats) {
    if(err) {
      gutil.log('[Webpack] Error:', err);
    }
    gutil.log('[Webpack]', stats.toString({
        colors:true,
        hash: false,
        chunks: false,
        version: true
      }));
  };
  //webpackBundler.run(webpackChangeHandler);
  webpackBundler.watch(200, webpackChangeHandler);
});
