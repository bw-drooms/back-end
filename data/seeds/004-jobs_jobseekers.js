
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('job_comp').del()
    .then(function () {
      // Inserts seed entries
      return knex('job_comp').insert([
        {company_id: 1, jobseeker_id: 1},
        {company_id: 1, jobseeker_id: 2},
        {company_id: 1, jobseeker_id: 3},
        {company_id: 2, jobseeker_id: 4},
        {company_id: 2, jobseeker_id: 5},
        {company_id: 2, jobseeker_id: 6}
      ]);
    });
};
