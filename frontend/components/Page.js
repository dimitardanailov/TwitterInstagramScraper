import { useEffect, useState } from 'react'
import { ScrapeProvider } from './ScrapeContext'

// Custom Hooks
function usesScrapes() {
	const [ scrapes, setScrapes ] = useState({
		twitterFollowers: 0,
		instagramFollowers: 0
	})

	useEffect(() => { 
		const fetchData = async () => {
			const res = await fetch('http://localhost:2293/data')
			const data = await res.json()

			setScrapes(data)
		}

		fetchData()
	}, [])

	return scrapes
}

export default function Page({children}) {
	const scapes = usesScrapes()

	return (
		<ScrapeProvider
			value={{
				scapes
			}}>
			<div className="page">{children}</div>
		</ScrapeProvider>
	)
}