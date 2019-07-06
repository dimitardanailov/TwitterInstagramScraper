import { useContext } from 'react'
import { ScrapeContext } from './ScrapeContext' 
import Table from './Table'
import Chart from './Chart'

export default function Data() {
	const { scrapes, fetchScrapes } = useContext(ScrapeContext);

	return (
		<div>
			<button type="button" onClick={fetchScrapes}>
        Refresh Data
      </button>
			<h2>Twitter:</h2>
			<Table scrapes={scrapes.twitterFollowers} />
			<Chart scrapes={scrapes.twitterFollowers}/>

			<h2>Instagram:</h2>
			<Table scrapes={scrapes.instagramFollowers} />
			<Chart scrapes={scrapes.instagramFollowers}/>

		</div>
	)
}