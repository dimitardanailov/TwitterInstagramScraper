import { useContext } from 'react'
import { ScrapeContext } from './ScrapeContext' 

export default function Data() {
	const { twitterFollowers, instagramFollowers } = useContext(ScrapeContext).scapes

	return (
		<div>
			<h2>Your data:</h2>

			<h3>Twitter followers are: { twitterFollowers } </h3>
			<h3>instagram followers are: { instagramFollowers } </h3>
		</div>
	)
}