// Include gulp
var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var path = require('path');
var webpack = require("webpack");
var gutil = require("gulp-util");
var jshint = require('gulp-jshint');

var webpackConfig = require(path.join(__dirname,"webpack.config.js"));

// Lint Task
gulp.task('lint', function() {
    return gulp.src(['server/**/*.js','index.js','!server/build/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task("webpack", function(callback) {
    // run webpack
    webpack(webpackConfig, function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
        callback();
    });
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch(['server/**/*.js','index.js'], ['lint']);
    gulp.watch('views/components/**/**/*.scss', ['webpack']);
    gulp.watch(['views/components/**/**/*.jsx','views/pages/*.jsx'], ['webpack']);
});


gulp.task('develop', function () {
  nodemon({ 
      script: 'index.js',
      ext: 'html js',
      ignore: ['./**/build/**','./node_modules/**']
    })
    .on('change', ['lint'])
    .on('restart', function () {
      console.log('restarted!')
    })
})

// Default Task
gulp.task('default', ['lint','webpack','watch','develop']);

