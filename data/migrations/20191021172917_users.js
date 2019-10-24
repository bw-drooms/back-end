
exports.up = function(knex) {
    return knex.schema.createTable('users', user => {
      user.increments();
      user.string('username')
          .notNullable()
          .unique()
      user.string('password')
          .notNullable()
      user.string('email')
      user.string('role')
      user.string('jobseeker_name')
        .notNullable()
      user.string('location')
        .notNullable()
      user.string('general_profession')
        .notNullable()
      user.string('description')
      user.string('linkedIn')
      user.boolean('selected')
        .defaultTo(false)
    })
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('users')
  };
