var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var less        = require('gulp-less');
var reload      = browserSync.reload;
gulp.task('less',function(){
    gulp.src('./src/*.less')
    .pipe(less())
    .pipe(gulp.dest('./dist/'))

})