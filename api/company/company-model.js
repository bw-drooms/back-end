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

//returns jobs all jobs available at all companies
  function getJobs() {
    return db('company as job')
      .join('company_profile as company')
      .join('profile_jobs as pj')
      .select('company_name', 'location', 'position', 'pay_range', 'selected')
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
