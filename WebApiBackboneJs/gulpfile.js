var gulp = require('gulp');

gulp.task('copy_backbone', function () {
    gulp.src('./lib/backbone/backbone-min.js')
   .pipe(gulp.dest('./Scripts'));
});

gulp.task('copy_jQuery', function () {
    gulp.src('./lib/jquery/dist/jquery.min.js')
   .pipe(gulp.dest('./Scripts'));
});

gulp.task('copy_json2', function () {
    gulp.src('./lib/json2/*.js')
   .pipe(gulp.dest('./Scripts'));
});

gulp.task('copy_underscore', function () {
    gulp.src('./lib/underscore/underscore-min.js')
   .pipe(gulp.dest('./Scripts'));
});

gulp.task('default', ['copy_backbone', 'copy_jQuery', 'copy_json2', 'copy_underscore']);