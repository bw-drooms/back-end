const db = require('../../data/dbConfig.js');

module.exports = {
    create,
    get,
    getById    
}

function create(jobseeker) {
    return db('jobseeker')
      .insert(jobseeker)
      .then(ids => {
        return getById(ids[0]);
      });
  }

function get() {
    return db('jobseeker')
}


function getById(id) {
    return db('jobseeker')
      .where({ id })
      .first();
  }