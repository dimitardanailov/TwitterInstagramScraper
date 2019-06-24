import express from 'express'
import db from './lib/db'
import './lib/cron'

const app = express()

app.get('/scaper', async (_, res, __) => {
	const twitterFollowers = await db.get('twitterFollowers')
	const instagramFollowers = await db.get('instagramFollowers')

	res.json({
		twitterFollowers,
		instagramFollowers
	})
})

app.get('/data', async (_, res, __) => {
	const data = db.value()
	res.json(data)
})

app.listen(2293, () => console.log('Hello world by scaper'))