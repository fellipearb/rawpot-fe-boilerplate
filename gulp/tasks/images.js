import gulp 	from 'gulp'
import imagemin from 'gulp-imagemin'

import CONST	from '../config.js'

gulp.task('images', cb => {

	gulp.src(CONST.IMAGES.SRC + '**/*.{jpeg,jpg,gif,png,svg}')
		.pipe(imagemin())
		.pipe(gulp.dest(CONST.IMAGES.BLD))

	cb()

})