import express from 'express'
import cors from 'cors'
import './lib/cron'
import db from './lib/db'
import uniqueFollowers from './lib/unique'
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

app.get('/data', async (_, res, __) => {
	const { twitterFollowers, instagramFollowers } = db.value()

	// const uniqueTwitterFollowers = uniqueFollowers(twitterFollowers)
	// const uniqueInstagramFollowers = uniqueFollowers(instagramFollowers)

	res.json({
		twitterFollowers: removeSimilarSiblings(twitterFollowers),
		instagramFollowers: removeSimilarSiblings(instagramFollowers)
	})
})

app.listen(2293, () => console.log('Hello world by scaper'))