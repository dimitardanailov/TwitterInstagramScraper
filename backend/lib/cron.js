import cron from 'node-cron'
import { runCron } from './scaper'

cron.schedule('*/10 * * * *', () => {
	console.log('Running the cron')
	runCron()
})