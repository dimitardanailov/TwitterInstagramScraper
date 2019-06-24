import low from 'lowdb'
import FileSync from 'lowdb/adapters/FileSync'

// Setup the db
const adapter = new FileSync('db.json')
const db = low(adapter)

const defaultSchema = {
	twitterFollowers: [],
	instagramFollowers: []
}

db
	.defaults(defaultSchema)
  .write()

export default db
