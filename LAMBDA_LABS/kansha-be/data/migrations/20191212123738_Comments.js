exports.up = function(knex) {
	return knex.schema.createTable('Comments', tbl => {
		tbl.increments();
		tbl.integer('user_id')
			.notNullable()
			.references('id')
			.inTable('Users')
			.onDelete('CASCADE')
			.onUpdate('CASCADE');
		tbl.integer('rec_id')
			.notNullable()
			.references('id')
			.inTable('Recognition')
			.onDelete('CASCADE')
			.onUpdate('CASCADE');
		tbl.string('message').notNullable();
		tbl.datetime('date').notNullable();
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists('Comments');
};
