import axios from 'axios'
import cheerio from 'cheerio'

async function getHtml(url) {
  const { data:html } = await axios.get(url)
  
  return html
}

async function getTwitterFollowers(html) {
  const $ = cheerio.load(html)
  const { count } = $('[data-nav="followers"] .ProfileNav-value').data()

  console.log(count)
}

export { getHtml, getTwitterFollowers }