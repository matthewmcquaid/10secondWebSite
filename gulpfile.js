
var gulp = require('gulp');


// Plugins
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
var rename = require('gulp-rename');
var mocha = require('gulp-mocha');
var gistanbul = require('gulp-istanbul');
var server = require('gulp-develop-server');

var path = require('path');

//////////////////////////
// Linting
//////////////////////////
gulp.task('lint', function () {
  return gulp.src('server/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});


//////////////////////////
// Concatenate & Minify JS
//////////////////////////

gulp.task('scripts', function () {
  return gulp.src('js/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('dist'))
    .pipe(rename('all.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});


//////////////////////////
// Watch Files For Changes
//////////////////////////

gulp.task('watch', function () {
  gulp.watch('server/**/*.js', ['lint', 'scripts']);
});


//////////////////////////
// Unit Tests
//////////////////////////

gulp.task('unit-tests-server', function () {
  return gulp.src(path.join(__dirname, 'server/tests/unit') + '/**/*.test.js')
    .pipe(mocha({reporter: 'nyan'}))
    .once('error', function (err) {
      console.log('ERROR: ' + err);
      process.exit(1);
    })
    .once('end', function () {
      console.log('unit-tests-server complete');
      process.exit();
    });
});


//////////////////////////
// Test Coverage
//////////////////////////

gulp.task('test-coverage-server', function () {
  gulp.src([path.join(__dirname, 'server/routes') + '/**/*.js'])
    .pipe(gistanbul())
    .pipe(gistanbul.hookRequire())
    .on('finish', function () {
      gulp.src(path.join(__dirname, 'server/tests/unit') + '/**/*.test.js')
        .pipe(mocha({reporter: 'nyan'}))
        .pipe(gistanbul.writeReports())
        .once('error', function () {
          console.log('ERROR: ' + err);
          process.exit(1);
        })
        .once('end', function () {
          console.log('test-coverage-server complete');
          process.exit();
        });
    });

});


//////////////////////////
// start server
//////////////////////////

gulp.task('server:start', function () {
  server.listen({path: './app.js'});
});


//////////////////////////
// restart server watch
//////////////////////////

gulp.task('server:restart', function () {
  gulp.watch(['./app.js'], server.restart);
});


//////////////////////////
// Default Task
//////////////////////////

gulp.task('default', ['lint', 'scripts', 'watch']);