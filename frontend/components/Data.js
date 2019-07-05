import { useContext } from 'react'
import { ScrapeContext } from './ScrapeContext' 
import Table from './Table'
import Chart from './Chart'

export default function Data() {
	const { scrapes, fetchScrapes } = useContext(ScrapeContext);

	return (
		<div>
			<Chart scrapes={scrapes.twitterFollowers}/>

			<button type="button" onClick={fetchScrapes}>
        Refresh Data
      </button>
			<h2>Twitter:</h2>
			<Table scrapes={scrapes.twitterFollowers} />

			<h2>Instagram:</h2>
			<Table scrapes={scrapes.instagramFollowers} />
		</div>
	)
}