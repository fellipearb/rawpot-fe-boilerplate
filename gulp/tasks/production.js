import gulp 	from 'gulp'
import runSeq	from 'run-sequence'
import zip 		from 'gulp-zip'
import gzip 	from 'gulp-gzip'
import bump 	from 'gulp-bump'
import wait 	from 'gulp-wait'
import ftp 		from 'gulp-ftp'
import fs 		from 'fs'
import yargs 	from 'yargs'

import CONST	from '../config.js'
import PKG		from '../../package.json'

gulp.task('production', cb => {

	global.isProd = true

	runSeq('clear', ['scripts', 'styles', 'images', 'templates'], 'build', 'pack', () => {

		let PKGversion = JSON.parse(fs.readFileSync('package.json')).version
		console.log(PKGversion)
		setTimeout(() => {
			return gulp.src([CONST.BLD + '**/*.{html,js,css,jpeg,jpg,png,gif,gz}', './package.json'])
					   .pipe(zip(PKG.name + '-' + PKGversion + '.zip'))
					   .pipe(ftp({
					   		host: '75.20.0.6',
					   		user: 'addialeto',
					   		pass: 'Em$D84eQ8q#4PBpt',
					   		remotePath: '/clientes.addialeto.net/web/content/Clientes/pkg/' + PKG.name + '/'
					   }))
					   .pipe(gulp.dest(CONST.BLD))
		}, 2000)

	})

	cb()

})

gulp.task('build', cb => {

	// Increment package.json build number
	let args = yargs.argv,
		bumpOptions = (undefined => {
			if ( args.patch ) return { type: 'patch' }
			if ( args.minor ) return { type: 'minor' }
			if ( args.major ) return { type: 'major' }
		})()

	gulp.src('./package.json')
		.pipe(bump(bumpOptions))
		.pipe(gulp.dest('./'))

	gulp.src(CONST.BLD + '**/*.{html,htm,js,css}')
		.pipe(gzip())
		.pipe(gulp.dest(CONST.BLD))

	cb()

})


gulp.task('pack', cb => {
	cb()
})