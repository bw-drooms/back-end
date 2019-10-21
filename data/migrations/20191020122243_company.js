
exports.up = function(knex) {
  return knex.schema.createTable('company', tbl => {
      tbl.increments()
      tbl.timestamp('created_at')
      tbl.string('location')
        .notNullable()
      tbl.string('position')
        .notNullable()
      tbl.string('description')
        .notNullable()
      tbl.integer('pay_range')
      tbl.boolean('selected')
        .defaultTo(false)
        .notNullable()
      tbl.integer('company_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('company_profile')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('company')
};
