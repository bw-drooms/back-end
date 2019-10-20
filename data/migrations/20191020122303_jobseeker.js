
exports.up = function(knex) {
  return knex.schema.createTable('jobseeker', tbl => {
      tbl.increments()
      tbl.string('jobseeker_name')
        .notNullable()
      tbl.string('location')
        .notNullable()
      tbl.string('general_profession')
        .notNullable()
      tbl.string('description')
      tbl.string('linkedIn')
      tbl.boolean('selected')
        .defaultTo(false)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('jobseeker')
};
