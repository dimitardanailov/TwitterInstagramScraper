import { useEffect, useState } from 'react'
import { ScrapeProvider } from './ScrapeContext'

// Custom Hooks
function useScrapes() {
	const [ scrapes, setScrapes ] = useState({
		twitterFollowers: [],
		instagramFollowers: []
	})

	// fetch function
  async function fetchScrapes() {
    const res = await fetch('http://localhost:2293/aggregate');
		const data = await res.json();
    setScrapes(data);
  }

	// didMount/Did Update
	useEffect(() => {
		fetchScrapes()
	}, [])

	return { scrapes, fetchScrapes }
}

export default function Page({children}) {
	const hookInfo = useScrapes()

	return (
		<ScrapeProvider value={hookInfo}>
			<div className="page">{children}</div>
		</ScrapeProvider>
	)
}