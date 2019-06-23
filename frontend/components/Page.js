import { ScrapeProvider } from './ScrapeContext'

export default function Page({children}) {
	return (
		<ScrapeProvider
			value={{
				hey: 'go',
				lets: 'go'
			}}>
			<div className="page">{children}</div>
		</ScrapeProvider>
	)
}