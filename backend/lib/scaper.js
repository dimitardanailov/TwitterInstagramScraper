import axios from 'axios'
import cheerio from 'cheerio'
import db from './db'

async function getTwitterFollowers(url) {
  const html = await getHtml(url)
  const $ = cheerio.load(html)
  const { count } = $('[data-nav="followers"] .ProfileNav-value').data()

  return count
}

async function getInstagramFollowers(url) {
  const html = await getHtml(url)
  const $ = cheerio.load(html)
  const data = $('script[type="application/ld+json"]').html()
  const parsedData = JSON.parse(data)
  const { userInteractionCount:followers } = parsedData.mainEntityofPage.interactionStatistic;

  return parseInt(followers)
}

async function getHtml(url) {
  const { data:html } = await axios.get(url)
  
  return html
}

async function runCron() {
  const promiseTwitterFollowers = getTwitterFollowers('https://twitter.com/d_danailov')
	const promiseInstagramFollowers = getInstagramFollowers('https://www.instagram.com/tomhanks/')
	const [ twitterFollowers, instagramFollowers ] = await Promise.all([
		promiseTwitterFollowers,
		promiseInstagramFollowers
	])

	db
		.set('twitterFollowers', twitterFollowers)
		.set('instagramFollowers', instagramFollowers)
    .write()
    
  console.log('Done!!!')
}

export { runCron }