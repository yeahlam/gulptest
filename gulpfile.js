var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var less        = require('gulp-less');
var reload      = browserSync.reload;
const concat =require('gulp-concat')
gulp.task('less',function(){
    gulp.src('./src/*.less')
    .pipe(less())
    .pipe()
    .pipe(gulp.dest('./dist/'))
})

gulp.task('concat',function(){
    gulp.src('./src/**/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./dist/'))

})