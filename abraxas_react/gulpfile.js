let gulp = require('gulp'); // 1
let browserify = require('browserify'); //2
let babelify = require('babelify'); //3
let source = require('vinyl-source-stream'); //4
let gls = require('gulp-live-server');
let concat = require('gulp-concat');
var buffer = require('vinyl-buffer');

var uglify = require('gulp-uglify');

var paths = {
    main_js: ['client/app.jsx'],
    css: ['client/components/**/*.*css'],
    js: ['client/**/*.js*']
};


gulp.task('css', function (callback) {
    return gulp.src(paths.css)
        .pipe(concat('main.css'))
        .pipe(gulp.dest('static/css/'));
});

gulp.task('js', function () {
    //Browserify bundles the JS.
    return browserify(paths.main_js)
        .transform(babelify) //———–> transpiles es6 to es5
        .bundle()
        .on('error', (err) => {
            console.log('JS Error', err);
        })
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('static/js'));
});

gulp.task('dev', gulp.series('css', 'js', function () {
    // Generic watch tasks for SASS and Browserify
    gulp.watch(paths.css, gulp.series('css'));
    gulp.watch(paths.js, gulp.series('js'));

    // Start the app server.
    var server = gls('server/server.js', {
        stdio: 'inherit'
    });
    server.start();

    // Reload server when backend files change.
    gulp.watch(['server/**/*.js'], function () {
        server.start.bind(server)();
    });

    // Notify server when frontend files change.
    gulp.watch(['static/**/*.{css,js,html}'], function (file) {
        server.notify(file);
    });
}));
gulp.task('prod', function () {
    // Browserify/bundle the JS.
    return browserify(paths.main_js)
        .transform(babelify)
        .bundle()
        .on('error', (err) => {
            console.log('JS Error', err);
        })
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest('static/js'));
});
