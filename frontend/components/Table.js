import { distanceInWords } from 'date-fns'

export default function Table({ scrapes }) {
	const scapesReversed = [...scrapes].reverse()

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
					{ scapesReversed.map((scrape, index) => {
						return (
							<tr key={index}>
								<td>{scrape.followers}</td>
								<td>{distanceInWords(new Date(scrape.date), new Date())}</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		</div>
	)
}