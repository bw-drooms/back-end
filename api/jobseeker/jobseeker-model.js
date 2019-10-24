const db = require('../../data/dbConfig.js');

module.exports = {
    create,
    get,
    getById,
    update,
    remove,
}

function create(jobseeker) {
    return db('jobseeker')
      .insert(jobseeker)
      .then(ids => {
        return getById(ids[0]);
      });
  }

function get() {
    return db('users')
}


function getById(id) {
    return db('users')
      .where({ id })
      .first();
  }

function update(id, changes) {
    return db('users')
      .where({ id })
      .update(changes)
      .then(ids => ({ id: ids[0], changes}));
  }

function remove(id) {
  return db('users')
    .where({ id })
    .delete()
}