( undefined => {

	let newObjects = document.getElementsByClassName('new')
	newObjects = Array.prototype.slice.call( newObjects, 0 )

	newObjects.forEach((el, index) => {

		el.className = el.className.replace('new', '').trim()
		
	})

})()