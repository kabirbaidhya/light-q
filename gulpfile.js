var gulp = require('gulp');
var babelify = require('babelify');
var browserify = require('browserify');
var babel = require('gulp-babel');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// Build for Browsers
gulp.task('build-standalone', function () {
    var bundler = browserify({
        entries: 'src/Q.js',
        debug: true
    });
    bundler.transform(babelify);

    bundler.bundle()
        .on('error', function (err) { console.error(err); })
        .pipe(source('q.js'))
        .pipe(buffer())
        .pipe(gulp.dest('dist'))
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(uglify()) // Use any gulp plugins you want now
        .pipe(sourcemaps.write('./'))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist'));
});

// Build for NPM
gulp.task('build-npm', function() {
    gulp.src('src/**/*.js')
      .pipe(babel())
      .pipe(gulp.dest('dist/node'));
});

gulp.task('default', ['build-standalone', 'build-npm']);