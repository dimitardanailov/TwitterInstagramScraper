function isInLastSixHours(timestamp) {
	const sixHoursAgo = 1000 * 60 * 60 * 6
	return Date.now() - timestamp < sixHoursAgo
}

function aggregate(scrapes) {
	const aggregateScrapes = [...scrapes].reverse().map(scrape => {
		const date = new Date(scrape.date)
		const optionalHour = isInLastSixHours(scrape.date) ? `-${date.getHours()}` : ''
		const key = `${date.getUTCFullYear()}-${date.getUTCMonth()}-${date.getDay()}${optionalHour}`

		return {
			key,
			...scrape
		}
	}).reduce((acc, currentScape) => {
		// check and see if this key is already in the acc
		if (!acc.find(scrape => scrape.key === currentScape.key)) {
			return [...acc, currentScape]
		}

		return acc
	}, [])

	return aggregateScrapes
}

export default aggregate