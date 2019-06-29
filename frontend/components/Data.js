import { useContext } from 'react'
import { ScrapeContext } from './ScrapeContext' 
import Table from './Table'

export default function Data() {
	// const { twitterFollowers, instagramFollowers } = useContext(ScrapeContext).scrapes
	// const twitterFollowers = []
	// const instagramFollowers = []
	const { scrapes, fetchScrapes } = useContext(ScrapeContext);

	return (
		<div>
			<button type="button" onClick={fetchScrapes}>
        Refresh Data
      </button>
			<h2>Twitter:</h2>
			<Table scrapes={scrapes.twitterFollowers}></Table>

			<h2>Instagram:</h2>
			<Table scrapes={scrapes.instagramFollowers}></Table>
		</div>
	)
}