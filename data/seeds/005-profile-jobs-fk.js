
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('profile_jobs').del()
    .then(function () {
      // Inserts seed entries
      return knex('profile_jobs').insert([
        {company_profile_id: 1, job_id: 1},
        {company_profile_id: 2, job_id: 2},
        {company_profile_id: 3, job_id: 3},
        {company_profile_id: 4, job_id: 4},
        {company_profile_id: 5, job_id: 5}
      ]);
    });
};
