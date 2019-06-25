function uniqueFollowers(array) {
	const uniqueFollowers = array.filter(function(currentElement, index, arr) {
		return index === arr.findIndex(arrElement => currentElement.followers === arrElement.followers)
	})

	return uniqueFollowers
}

export default uniqueFollowers