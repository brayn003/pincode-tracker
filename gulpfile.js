var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    flatten = require('gulp-flatten'),
    browserSync = require('browser-sync').create();

var path = {
    vendor: {
        js: [
            './node_modules/angular/angular.js',
            './node_modules/@uirouter/angularjs/release/angular-ui-router.min.js',
            './node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js',
            './node_modules/ngmap/build/scripts/ng-map.min.js'
        ],
        css: [
            './node_modules/bootstrap/dist/css/bootstrap.css'
        ]
    },
    src: {
        js: [
            './src/app/**/*.js'
        ],
        html: [
            './src/**/*.html'
        ]
    }
};

gulp.task('vendor', function() {
    gulp.src(path.vendor.js)
        .pipe(concat('vendor.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/'));
});

gulp.task('vendorcss', function() {
    gulp.src(path.vendor.css)
        .pipe(concat('vendor.css'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('html', function() {
    gulp.src(path.src.html)
        .pipe(flatten())
        .pipe(gulp.dest('./dist/'));
    browserSync.reload();
});

// gulp.task('sass', function() {
//     gulp.src('./sass/*.scss')
//         .pipe(sass().on('error', sass.logError))
//         .pipe(gulp.dest('./app/css/'))
//         .pipe(browserSync.stream());
// });

gulp.task('js', function() {
    gulp.src(path.src.js)
        // .pipe(uglify())
        .pipe(flatten())
        .pipe(gulp.dest('./dist/'));
    browserSync.reload();
});


gulp.task('data', function() {
    gulp.src('./src/data/*')
        .pipe(flatten())
        .pipe(gulp.dest('./dist/'));
    browserSync.reload();
});

gulp.task('watch', function() {
    browserSync.init({
        'server': {
            'baseDir': './dist/'
        }
    });
    gulp.watch('./src/**/*.html', ['html']);
    gulp.watch('./src/app/**/*.js', ['js']);
});


gulp.task('serve', ['vendor', 'vendorcss', 'html', 'js', 'data', 'watch']);
gulp.task('build', ['vendor', 'vendorcss', 'html', 'js', 'data']);