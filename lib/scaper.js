import axios from 'axios'
import cheerio from 'cheerio'

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

  return followers
}

async function getHtml(url) {
  const { data:html } = await axios.get(url)
  
  return html
}

export { getTwitterFollowers, getInstagramFollowers }