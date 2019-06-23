import low from 'lowdb'
import FileSync from 'lowdb/adapters/FileSync'

// Setup the db
const adapter = new FileSync('db.json')
const db = low(adapter)

const defaultSchema = {
	twitterFollowers: 0,
	instagramFollowers: 0
}

db
	.defaults(defaultSchema)
  .write()

export default db
