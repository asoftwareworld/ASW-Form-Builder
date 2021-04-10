'use strict';

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglifycss = require('gulp-uglifycss'),
    rename = require('gulp-rename'),
    del = require('del'),
    sass = require('gulp-dart-sass');

gulp.task('build-css-prod', function() {
    return gulp.src('src/assets/**/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(concat('asw-theming.css'))
        .pipe(gulp.dest('dist/theming'))
        .pipe(uglifycss({"uglyComments": true}))
        .pipe(rename('asw-theming.min.css'))
        .pipe(gulp.dest('dist/theming'));    
});

gulp.task('copy-component-css', function () {
    return gulp.src([
        'src/components/**/*.scss',
        'src/assets/**/*.scss'
    ])
    .pipe(gulp.dest('dist/theming'));    
});

gulp.task('images', function() {
    return gulp.src(['blue.svg'])
        .pipe(gulp.dest('dist'));
});

//Cleaning previous gulp tasks from project
gulp.task('clean', function() {
	return del(['dist/theming']);
});

//Copy readme
gulp.task('readme', function() {
    return gulp.src(['README.md', 'LICENSE'])
        .pipe(gulp.dest('dist'));
});

//Building project with run sequence
gulp.task('build-assets', 
gulp.series('clean', 
'copy-component-css', 
'build-css-prod', 
'images', 
'readme'));

