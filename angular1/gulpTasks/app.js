const gulp  = require('gulp');
const htmlmin  = require('gulp-htmlmin');
const uglifycss  = require('gulp-uglifycss');
const uglify  = require('gulp-uglify');
const concat  = require('gulp-concat');
const babel  = require('gulp-babel');

//A task app serve como intermediário para chamar as outras 4 tasks de uma única vez.
gulp.task('app', ['app.html', 'app.css', 'app.js', 'app.assets']);

gulp.task('app.html', function(){
    gulp.src('app/**/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('public'))
});

gulp.task('app.css', function(){
    gulp.src('app/**/*.css')
        .pipe(uglifycss({"uglyComments" : true}))
        .pipe(concat('app.min.css'))
        .pipe(gulp.dest('public/assets/css'))
});

gulp.task('app.js', function(){
    gulp.src('app/**/*.js')
        .pipe(babel({presets: ['es2015']}))
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('public/assets/js'))
});

gulp.task('app.assets', function(){
    gulp.src('assets/**/*.*')
        .pipe(gulp.dest('public/assets'))
});