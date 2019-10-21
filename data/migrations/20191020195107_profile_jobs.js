
exports.up = function(knex) {
    return knex.schema.createTable('profile_jobs', tbl => {
        tbl.increments()
        tbl.integer('company_profile_id')
          .references('id')
          .inTable('company_profile')
          .notNullable()
        tbl.integer('job_id')
          .references('id')
          .inTable('company')
          .notNullable()
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('profile_jobs')
  };