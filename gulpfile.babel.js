import path from 'path'
import fs 	from 'fs'

const TASKS = fs.readdirSync('./gulp/tasks/').filter(name => { return /(\.(js)$)/i.test(path.extname(name)) })

global.isProd = false

TASKS.forEach(file => {
	require('./gulp/tasks/' + file)
})