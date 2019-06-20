import { getHtml, getTwitterFollowers } from './lib/scaper'

async function go() {
	const html = await getHtml('https://twitter.com/wesbos')

	await getTwitterFollowers(html)
}

go()