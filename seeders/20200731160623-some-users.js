'use strict'

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			'users',
			[
				{
					name: 'Micah Dude',
					email: 'micah@dude.com',
					phone: 12345,
					password: 'micahdude',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Angela Girl',
					email: 'angela@girl.com',
					phone: 54321,
					password: 'angelagirl',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		)
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('users', null, {})
	},
}
