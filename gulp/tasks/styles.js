import gulp 		from 'gulp'
import sass			from 'gulp-sass'
import bsync 		from 'browser-sync'
import urlAdj		from 'gulp-css-url-adjuster'
import cleanCSS 	from 'gulp-clean-css'
import sourcemaps	from 'gulp-sourcemaps'
import autoprefixer	from 'gulp-autoprefixer'

import CONST	from '../config.js'


gulp.task('styles', cb => {

	gulp.src(CONST.STYLES.SRC + '**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
		.pipe(urlAdj({
			prependRelative: CONST.IMAGES.REL // Relax, only works on images. I tested.
		}))
	    .pipe(cleanCSS({
	    	compatibility: 'ie8',
	    	format: global.isProd ? false : 'beautify',
	    	sourceMap: !global.isProd,
	    	restructuring: false
	    }))
	    .pipe(autoprefixer({ cascade: false }))
	    .pipe(sourcemaps.write())
		.pipe(gulp.dest(CONST.STYLES.BLD))
		.pipe(bsync.stream())

	cb()

})