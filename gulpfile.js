let gulp = require('gulp');
let htmlmin = require('gulp-htmlmin');
let cleanCSS = require('gulp-clean-css');

gulp.task('minify', () => {
  return gulp.src('public/views/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('build'));
});

gulp.task('minify-css', () => {
  return gulp.src('public/styles/*.css')
    .pipe(cleanCSS({debug: true}, function(details) {
      console.log(details.name + ': ' + details.stats.originalSize);
      console.log(details.name + ': ' + details.stats.minifiedSize);
    }))
  .pipe(gulp.dest('public/build'));
});
