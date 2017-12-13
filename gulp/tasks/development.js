import gulp 	from 'gulp'
import yargs	from 'yargs'
import bsync	from 'browser-sync'
import runSeq	from 'run-sequence'

import CONST	from '../config.js'

gulp.task('development', cb => {

	global.isProd = false

	runSeq('clear', 'scripts', 'styles', 'images', 'templates', 'bsync', cb => {
		
		gulp.watch(CONST.SCRIPTS.SRC + '**/*.js', ['scripts'])
		gulp.watch(CONST.SCRIPTS.BLD + '**/*.js').on('change', bsync.reload)

		gulp.watch(CONST.STYLES.SRC + '**/*.scss', ['styles'])

		gulp.watch(CONST.TPL.SRC + '**/*.html', ['templates'])
		gulp.watch(CONST.BLD + '**/*.html', bsync.reload)

	})

	cb()

})

gulp.task('bsync', cb => {
	bsync({
		server: {
			baseDir: CONST.BLD
		},
		ui: {
			port: 8080
		}
	})
	cb()
})