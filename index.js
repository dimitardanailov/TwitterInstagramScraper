import { getHtml, getTwitterFollowers, getInstagramFollowers } from './lib/scaper'

async function go() {
	const promiseTwitterFollowers = getTwitterFollowers('https://twitter.com/wesbos')
	const promiseInstagramFollowers = getInstagramFollowers('https://www.instagram.com/wesbos/')
	const [ twitterFollowers, instagramFollowers ] = await Promise.all([
		promiseTwitterFollowers,
		promiseInstagramFollowers
	])

	console.log(`Twitter followers are: ${twitterFollowers}`)
	console.log(`Instagram followers are: ${instagramFollowers}`)
}

go()