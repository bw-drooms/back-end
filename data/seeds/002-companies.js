
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('company').del()
    .then(function () {
      // Inserts seed entries
      return knex('company').insert([
        {company_name: 'Aetna', location: 'Austin', position: 'C#, MVC, SQL Full Stack Developer', description: 'Our Full Stack Web Developers have skills focusing on C#, MVC, JavaScript, and SQL. You will work alongside front and backend developers to accomplish your tasks. The applications our team creates revolve around Medicare Product and Membership Projects. Various tasks include creating or maintaining web applications, loading data, writing queries / procedures, and other tasks as assigned.', pay: 90000, selected: false},
        {company_name: 'Allogy', location: 'Austin', position: 'Software Engineer', description: 'Allogy is an employee-owned SaaS company with growing presence in healthcare and government sectors. As a part of the Allogy core team you will be developing enterprise software products in collaboration with innovation teams at some of the largest hospitals and federal agencies in the country. Your job will include thinking critically and making architectural decisions focusing on longevity and maintainability. As the team grows you will have a continued say in product development decisions and the architecture roadmap for our products.', pay_range: 110000, selected: false},
        {company_name: 'Volusion', location: 'Austin', position: 'Software Engineer', description: 'At Volusion, we make products that people love. Our teams are dedicated to providing SaaS commerce solutions and services for all business types, ranging from startups to large enterprises. If you are the kind of entrepreneur that loves working in teams, has a passion for driving positive change, and wants to change the world with your ideas, we want to hear from you.', pay_range: 75000, selected: false},
        {company_name: 'Harte Hanks', location: 'Austin', position: 'Full Stack Software Engineer', description: 'Net C#, PHP developer will develop and integrate in-house and third party software applications. This position is for engineers who enjoy a fast paced, team oriented environment in which new technologies and projects are introduced with high frequency. Programmer will be responsible for ground-up development of tools as well as enhancing, integrating and extending best in class third party CRMs.', pay_range: 68000, selected: false},
        {company_name: 'Cox Automotive', location: 'Austin', position: 'Software Engineering Intern', description: 'vAuto is seeking a college level Software Developer intern to work with a team to design and development new products and to development enhancements and extensions to existing systems using C# and ASP.Net.', pay_range: 33000, selected: false},

      ]);
    });
};
