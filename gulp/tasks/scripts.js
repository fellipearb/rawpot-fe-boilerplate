import gulp 		from 'gulp'
import gulpif		from 'gulp-if'
import concat 		from 'gulp-concat'
import replace		from 'gulp-html-replace'
import yargs 		from 'yargs'
import bsync 		from 'browser-sync'
import browserify	from 'browserify'
import plugins 		from 'gulp-load-plugins'
import source 		from 'vinyl-source-stream'
import buffer 		from 'vinyl-buffer'
import critical 	from 'critical'
import babelify 	from 'babelify'
import uglify		from 'gulp-uglify'

import CONST		from '../config.js'



var args = yargs.argv

gulp.task('scripts', cb => {

	return browserify({
	        'entries': [CONST.SCRIPTS.SRC + 'main.js'],
	        'debug': true,
	        'transform': [
	            babelify.configure({
	                'presets': ['es2015']
	            })
	        ]
	    })
    	.bundle()
    	.on('error', function () {
	        var intArgs = Array.prototype.slice.call(arguments);

	        plugins().notify.onError({
	            'title': 'Compile Error',
	            'message': '<%= error.message %>'
	        }).apply(this, intArgs);

	        this.emit('end');
	    })
	    .pipe(source(CONST.SCRIPTS.FILENAME))
	    .pipe(buffer())
	    .pipe(gulpif(global.isProd, uglify()))
	    .pipe(plugins().sourcemaps.init({'loadMaps': true}))
	    .pipe(plugins().sourcemaps.write('.'))
	    .pipe(gulp.dest(CONST.SCRIPTS.BLD))
	    .pipe(bsync.stream())

	cb()

})