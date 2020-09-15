
'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var browserSync = require('browser-sync').create();
var npmDist = require('gulp-npm-dist');

gulp.task('sass-css', function(){
  return gulp.src('scss/azia.scss')
    .pipe(sass())
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('minify-css', function(){
  return gulp.src('scss/azia.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('serve', gulp.series('sass-css', () => {
  browserSync.init({
    server: true
  });
  gulp.watch('scss/**/*.scss', gulp.series('sass-css'));
  gulp.watch('template/**/*.html', browserSync.reload);
  gulp.watch('js/*.js', browserSync.reload);
}));

// Copy dependencies to lib/
gulp.task('npm-lib', async function() {
  gulp.src(npmDist(), {base:'./node_modules/'})
    .pipe(rename(function(path) {
      path.dirname = path.dirname.replace(/\/dist/, '').replace(/\\dist/, '');
    }))
    .pipe(gulp.dest('lib'));
});
