function removeSimilarSiblings(array) {
	return array.filter(function(currentElement, index, arr) {
		if (index === 0) return true

		return !(currentElement.followers === arr[index - 1].followers)
	})
}

export default removeSimilarSiblings