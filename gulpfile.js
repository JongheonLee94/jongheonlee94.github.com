var gulp = require('gulp');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var minifyhtml = require('gulp-minify-html');

gulp.task('csscom', function () {
 gulp.src(['src/css/*.css'])
 .pipe(concat('styles.css'))
 .pipe(minifyCSS())
 .pipe(gulp.dest('dist/css/'));
});

gulp.task('js', function () {
 gulp.src('src/js/*.js')
 .pipe(concat('script.js'))
 .pipe(uglify())
 .pipe(gulp.dest('dist/js/'));
});

gulp.task('html', function () {
   return gulp.src('src/index.html')
      .pipe(minifyhtml())
      .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['csscom', 'js', 'html']);
