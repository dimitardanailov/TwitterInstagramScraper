import express from 'express'
import cors from 'cors'
import './lib/cron'
import db from './lib/db'
import aggregate from './lib/aggregate' 
import removeSimilarSiblings from './lib/removeSimilarSiblings'

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

app.get('/aggregate', async (_, res, __) => {
	const { twitterFollowers, instagramFollowers } = db.value()
	
	const uniqueTwitter = removeSimilarSiblings(twitterFollowers)
	const uniqueInstagram = removeSimilarSiblings(instagramFollowers)

	const aggTwitter = aggregate(twitterFollowers)
	const aggInstagram = aggregate(instagramFollowers)

	res.json({
		twitterFollowers: aggTwitter,
		instagramFollowers: aggInstagram
	})
})

app.get('/raw', async (_, res, __) => {
	const { twitterFollowers, instagramFollowers } = db.value()

	res.json({
		twitterFollowers: removeSimilarSiblings(twitterFollowers),
		instagramFollowers: removeSimilarSiblings(instagramFollowers)
	})
})

app.listen(2293, () => console.log('Hello world by scaper'))