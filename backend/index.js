import express from 'express'
import cors from 'cors'
import './lib/cron'
import db from './lib/db'
import uniqueFollowers from './lib/unique'

const app = express()

app.use(cors())

app.get('/scaper', async (_, res, __) => {
	const twitterFollowers = await db.get('twitterFollowers')
	const instagramFollowers = await db.get('instagramFollowers')

	res.json({
		twitterFollowers,
		instagramFollowers
	})
})

app.get('/data', async (_, res, __) => {
	const { twitterFollowers, instagramFollowers } = db.value()

	const uniqueTwitterFollowers = uniqueFollowers(twitterFollowers)
	const uniqueInstagramFollowers = uniqueFollowers(instagramFollowers)
	
	res.json({
		twitterFollowers: uniqueTwitterFollowers,
		instagramFollowers: uniqueInstagramFollowers
	})
})

app.listen(2293, () => console.log('Hello world by scaper'))