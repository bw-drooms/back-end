
exports.up = function(knex) {
  return knex.schema.createTable('company', tbl => {
      tbl.increments()
      tbl.timestamp('created_at')
      tbl.string('company_name')
        .notNullable()
      tbl.string('location')
        .notNullable()
      tbl.string('position')
        .notNullable()
      tbl.string('description')
        .notNullable()
      tbl.number('pay_range')
      tbl.boolean('selected')
        .defaultTo(false)
        .notNullable()


  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('company')
};
