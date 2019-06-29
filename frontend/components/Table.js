import { distanceInWords } from 'date-fns'

export default function Table({ scrapes }) {
	scrapes.reverse()

	console.log('scrapes', scrapes)

	return (
		<div>
			<h2>Your data:</h2>
			<table>
				<thead>
					<tr>
						<td>Followers</td>
						<td>Date</td>
					</tr>
				</thead>
				<tbody>
					{ scrapes.map(scrape => {
						<tr key={scrape.date}>
							<td>{scrape.followers}</td>
							<td>{scrape.date}</td>
						</tr>
					})}
				</tbody>
			</table>
		</div>
	)
}