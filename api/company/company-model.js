const db = require('../../data/dbConfig.js');

module.exports = {
    create,
    get,
    getJobsById,
    getJobseekersByJobID,
    update,
    getById,

    // remove
}

function create(company) {
    return db('company_profile')
        .insert(company)
}

function get() {
    return db('company_profile')
}

function getById(id) {
    return db('company_profile')
      .where({ id })
      .first();
  }

function getJobseekersByJobID(id) {
    return db('job_comp')
        .join('jobseeker as j', 'j.id', '=', 'job_comp.jobseeker_id')
        .where('company_id', '=', id)
}

//get jobs by company id
function getJobsById(company_id) {
     return db('company as jobs')
        .join('company_profile as company', 'company.id', 'jobs.company_id', )
        .where('jobs.company_id', '=', company_id)
}

function update(id, changes) {
    return db('company_profile')
      .where({ id })
      .update(changes)
      .then(ids => ({ id: ids[0], changes}));
  }