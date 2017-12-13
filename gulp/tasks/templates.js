import gulp 	from 'gulp'

import CONST	from '../config.js'

gulp.task('templates', cb => {

	gulp.src(CONST.TPL.SRC + '**/*.html')
		.pipe(gulp.dest(CONST.TPL.BLD))

	cb()

})