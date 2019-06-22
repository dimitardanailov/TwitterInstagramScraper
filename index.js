import express from 'express'
import { getTwitterFollowers, getInstagramFollowers } from './lib/scaper'
import db from './lib/db'

const app = express()

console.log(db)

app.get('/scaper', async (req, res, next) => {
	console.log('Hello world')
	const promiseTwitterFollowers = getTwitterFollowers('https://twitter.com/wesbos')
	const promiseInstagramFollowers = getInstagramFollowers('https://www.instagram.com/wesbos/')
	const [ twitterFollowers, instagramFollowers ] = await Promise.all([
		promiseTwitterFollowers,
		promiseInstagramFollowers
	])

	res.json({
		twitterFollowers,
		instagramFollowers
	})
})

app.listen(2293, () => console.log('Hello world by scaper'))