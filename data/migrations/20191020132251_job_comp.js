
exports.up = function(knex) {
  return knex.schema.createTable('job_comp', tbl => {
      tbl.increments()
      tbl.integer('company_id')
        .references('id')
        .inTable('company')
        .unsigned()
        .notNullable()
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      tbl.integer('jobseeker_id')
        .references('id')
        .inTable('jobseeker')
        .unsigned()
        .notNullable()
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('job_comp')
};
