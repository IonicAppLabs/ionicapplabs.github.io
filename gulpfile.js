var gulp = require('gulp'),
    connect = require('gulp-connect'),
    jshint = require('gulp-jshint'),
		concat = require('gulp-concat'),
		uglify = require('gulp-uglify');

// Lint task
gulp.task('lint', function() {
	return gulp.src('js/*.js')
			.pipe(jshint())
			.pipe(jshint.reporter('default'));
});

// Concatenate & minify js
gulp.task('scripts', function() {
	return gulp.src('js/*.js')
			.pipe(concat('scripts.js'))
			.pipe(uglify())
			.pipe(gulp.dest('dist'))
			.pipe(connect.reload());
});

gulp.task('server', function() {
  connect.server({
    livereload: true
  });
});

gulp.task('watch', function() {
  gulp.watch(['js/*.js', 'views/*.html', 'css/*.css'], ['lint', 'scripts']);
});

gulp.task('serve', ['lint', 'scripts', 'server', 'watch']);