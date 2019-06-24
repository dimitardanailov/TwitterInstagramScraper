import { useEffect, useState } from 'react'
import { ScrapeProvider } from './ScrapeContext'

// Custom Hooks
function usesScrapes() {
	const [ scrapes, setScrapes ] = useState({
		twitterFollowers: [],
		instagramFollowers: []
	})

	// fetch function
  async function fetchScrapes() {
    const res = await fetch('http://localhost:2293/data');
		const data = await res.json();
    setScrapes(data);
  }

	useEffect(() => { 
		fetchScrapes()
	}, [])

	return scrapes
}

export default function Page({children}) {
	const scrapes = usesScrapes()

	return (
		<ScrapeProvider
			value={{
				scrapes
			}}>
			<div className="page">{children}</div>
		</ScrapeProvider>
	)
}