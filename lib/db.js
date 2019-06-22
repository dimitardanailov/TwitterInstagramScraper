import lowdb from 'lowdb'
import FileSync from 'lowdb/adapters/FileAsync'

// Setup the db
const adapter = new FileSync('../db.json')
const db = lowdb(adapter)
db.defaults({
	twitterFollowers: 0,
	instagramFollowers: 0
}).write()

export default db