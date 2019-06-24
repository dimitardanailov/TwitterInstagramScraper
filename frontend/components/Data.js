import { useContext } from 'react'
import { ScrapeContext } from './ScrapeContext' 

export default function Data() {
	const { twitterFollowers, instagramFollowers } = useContext(ScrapeContext).scrapes
	console.log('twitterFollowers', twitterFollowers)
	console.log('instagramFollowers', instagramFollowers)

	return (
		<div>
			<h2>Your data:</h2>
		</div>
	)
}