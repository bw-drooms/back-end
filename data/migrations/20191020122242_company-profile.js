
exports.up = function(knex) {
  return knex.schema.createTable('company_profile', tbl => {
      tbl.increments()
      tbl.string('company_name')
        .notNullable()
      tbl.string('company_industry')
      tbl.integer('number_of_employees')
        .unsigned()

  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('company_profile')
};
