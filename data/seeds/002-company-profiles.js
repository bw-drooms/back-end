
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('company_profile').del()
    .then(function () {
      // Inserts seed entries
      return knex('company_profile').insert([
        {company_name: 'Aetna', company_industry: 'health insurance', number_of_employees:1000 },
        {company_name: 'Allogy', company_industry: 'information technology', number_of_employees: 500 },
        {company_name: 'Volusion', company_industry: 'e-commerce', number_of_employees: 250 },
        {company_name: 'Harte Hanks', company_industry: 'marketing', number_of_employees: 500 },
        {company_name: 'Cox Automotive', company_industry: 'automotive', number_of_employees: 700 }
      ]);
    });
};
