const db = require('../../data/dbConfig.js');

module.exports = {
    create,
    getJobs,
    getById,
    update,
    remove
}

function create(job) {
    return db('company')
      .insert(job)
      .then(ids => {
        return getById(ids[0]);
      });
  }


function getJobs() {
    return db('company')
}

function getById(id) {
    return db('company')
      .where({ id })
      .first();
  }

  function update(id, changes) {
    return db('company')
      .where({ id })
      .update(changes)
      .then(ids => ({ id: ids[0], changes}));
  }

  function remove(id) {
    return db('company')
      .where({ id })
      .delete()
  }
