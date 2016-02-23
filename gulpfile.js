var gulp = require('gulp');
var babel = require('gulp-babel');
var babelify = require('babelify');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var sourcemaps = require('gulp-sourcemaps');

// Build for Browsers
gulp.task('build:standalone', function () {
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
gulp.task('build:transpile', function() {
    gulp.src('src/**/*.js')
      .pipe(babel())
      .pipe(gulp.dest('lib'));
});

gulp.task('default', ['build:standalone', 'build:transpile']);
