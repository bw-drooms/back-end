const db = require('../../data/dbConfig.js');

module.exports = {
    create,
    get,
    getJobsById,
    // getById,
    // update,
    // remove
}

function create(company) {
    return db('company_profile')
        .insert(company)
}

function get() {
    return db('company_profile')
}

function getJobsById(company_id) {
     return db('company as jobs')
        .join('company_profile as company', 'company.id', 'jobs.company_id', )
        .where('jobs.company_id', '=', company_id)
}
