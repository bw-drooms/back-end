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
      .select('job.id as job_id','company_name', 'location', 'position', 'description', 'pay_range', 'selected', 'created_at', 'company_id')
}

function getById(id) {
    return db('company')
      .where({ id })
      .first();
  }

  //get jobs by company id
function getJobsById(company_id) {
  return db('company as jobs')
     .join('company_profile as company', 'company.id', 'jobs.company_id', 'jobs.id')
     .where('jobs.company_id', '=', company_id)
}

  function update(id, changes) {
    return db('jobseeker')
      .where({ id })
      .update(changes)
      .then(ids => ({ id: ids[0], changes}));
  }

  function remove(id) {
    return db('company')
      .where({ id })
      .delete()
  }
