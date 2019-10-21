
exports.up = function(knex) {
    return knex.schema.createTable('users', user => {
      user.increments();
      user.string('username')
          .notNullable()
          .unique()
      user.string('password')
          .notNullable()
      user.string('role')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropIfTableExists('users')
  };
