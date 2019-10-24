
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('company').del()
    .then(function () {
      // Inserts seed entries
      return knex('company').insert([
        {location: 'Austin', position: 'C#, MVC, SQL Full Stack Developer', description: 'Our Full Stack Web Developers have skills focusing on C#, MVC, JavaScript, and SQL.', pay_range: 90000, selected: false, company_id: 1 },
        {location: 'Austin', position: 'Software Engineer', description: 'Allogy is an employee-owned SaaS company with growing presence in healthcare and government sectors.', pay_range: 110000, selected: false, company_id: 2 },
        {location: 'Austin', position: 'Software Engineer', description: 'At Volusion, we make products that people love. ', pay_range: 75000, selected: false, company_id: 3 },
        {location: 'Austin', position: 'Full Stack Software Engineer', description: 'Net C#, PHP developer will develop and integrate in-house and third party software applications.', pay_range: 68000, selected: false, company_id: 4 },
        {location: 'Austin', position: 'Software Engineering Intern', description: 'vAuto is seeking a college level Software Developer intern to work with ', pay_range: 33000, selected: false, company_id: 5 }
      ]);
    });
};
