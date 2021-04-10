'use strict';

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglifycss = require('gulp-uglifycss'),
    rename = require('gulp-rename'),
    del = require('del'),
    flatten = require('gulp-flatten');

// gulp.task('build-css', function() {
// 	gulp.src([
//         'src/assets/asw-theming.scss',
// 		    'src/components/**/*.scss'
//     ])
//         .pipe(concat('asw-theming.css'))
//         .pipe(gulp.dest('dist/resources'));
// });

// gulp.task('build-css-prod', function() {
//     gulp.src([
//         'src/assets/asw-theming.scss'
//     ])
//     .pipe(concat('asw-theming.css'))
//     .pipe(gulp.dest('dist/resources'))
//     .pipe(uglifycss({"uglyComments": true}))
//     .pipe(rename('asw-theming.min.css'))
//     .pipe(gulp.dest('dist/resources'));
// });

// gulp.task('copy-component-css', function () {
//     gulp.src([
//         'src/components/**/*.scss',
//         'src/assets/**/*.scss'
//     ])
//     .pipe(gulp.dest('dist/resources'));
// });

// gulp.task('images', function() {
//     return gulp.src(['src/app/components/**/images/*.png', 'src/app/components/**/images/*.gif'])
//         .pipe(flatten())
//         .pipe(gulp.dest('dist/resources/images'));
// });

// gulp.task('themes', function() {
//     return gulp.src(['src/assets/components/themes/**/*',
//         '!src/assets/components/themes/soho-*/**/*',
//         '!src/assets/components/themes/viva-*/**/*',
//         '!src/assets/components/themes/mira/**/*',
//         '!src/assets/components/themes/nano/**/*'])
//         .pipe(gulp.dest('dist/resources/themes'));
// });

//Cleaning previous gulp tasks from project
gulp.task('clean', function() {
	del(['dist/resources']);
});

//Copy readme
gulp.task('readme', function() {
    gulp.src(['README.md'])
    .pipe(gulp.dest('dist'));
});

//Building project with run sequence
gulp.task('build-assets', ['readme']);

