const { Worker } = require('bullmq')

const worker = new Worker(
	'Logger',
	async (job) => {
		const err = Math.random() > 0.5 ? true : false
		if (err) {
			throw new Error('Process error!')
		}
		if (job.name == 'user') {
			console.log(job.name)
			console.log(job.data)
		}
	},
	{ connection: { host: 'localhost', port: '6379', password: 'default123' } }
)
