const { Queue, QueueScheduler } = require('bullmq')

const queue = new Queue('Logger', {
	connection: { host: 'localhost', port: '6379', password: 'default123' },
})

// untuk melakukan list terhadap proses yang error
const queueScheduler = new QueueScheduler('Logger', {
	connection: { host: 'localhost', port: '6379', password: 'default123' },
})

function produce() {
	for (let i = 1; i < 10; i++) {
		queue.add(
			'user',
			{
				id: 'bacjsksfhy124jdkhdh',
				activity: 'login',
				index: i,
			},
			{ attempts: 3, backoff: { type: 'fixed', delay: 5000 } }
		)
	}
}

produce()
// job nya namanya user
// queue.add(
// 	'user',
// 	{
// 		id: 'bacjsksfhy124jdkhdh',
// 		activity: 'login',
// 	},
// 	{ attempts: 3, backoff: { type: 'fixed', delay: '5000' } }
// )
