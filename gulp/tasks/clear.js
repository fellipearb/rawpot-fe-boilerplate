import gulp 	from 'gulp'
import path		from 'path'
import slug		from 'slug'
import fs 		from 'fs'

import CONST	from '../config.js'


gulp.task('clear', cb => {

	if(fs.existsSync(CONST.BLD)) recursiveDelete(CONST.BLD)
	
	cb()

})

var recursiveDelete = path => {
  if( fs.existsSync(path) ) {
    fs.readdirSync(path)
    	.forEach((file, i) => {
      		var curPath = path + "/" + file

      		// Recurse
      		if ( fs.lstatSync(curPath).isDirectory() ) {
        		recursiveDelete(curPath)
      		} else { // delete file
        		fs.unlinkSync(curPath)
      		}
    });
    fs.rmdirSync(path)
  }
}