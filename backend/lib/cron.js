import cron from 'node-cron'
import { runCron } from './scaper'

cron.schedule('* * * * *', () => {
	console.log('Running the cron')
	runCron()
})