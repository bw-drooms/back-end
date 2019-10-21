const db = require('../../data/dbConfig.js');

module.exports = {
    create,
    getJobs,
    getById,
    update,
    remove
}

function create(job) {
  return db('company')//jobs + company = jobs at companies
    .insert(job)
}

//returns jobs all jobs available at all companies
  function getJobs() {
    return db('company as job')
      .join('company_profile as company', 'company.id', 'job.company_id')
      .select('company_name', 'location', 'position', 'description', 'pay_range', 'selected', 'created_at', 'company_id')
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
      // .then(ids => ({ id: ids[0], changes}));
  }

  function remove(id) {
    return db('company')
      .where({ id })
      .delete()
  }
