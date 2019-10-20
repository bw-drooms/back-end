
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('jobseeker').del()
    .then(function () {
      // Inserts seed entries
      return knex('jobseeker').insert([
        {jobseeker_name: 'Caitlyn Stewart' , location: 'Austin, TX', general_profession: 'Full Stack Software Engineer', description: 'Black belt in Karate', linkedIn: ''},
        {jobseeker_name: 'Devin Warrick' , location: 'Carrollton, TX', general_profession: 'Full Stack Software Engineer', description: 'Experienced Operations Trainer with a demonstrated history of working in the retail industry. Skilled in Event Planning, Microsoft Excel, Customer Service, Microsoft Word, and Team Building. Project based focus with expertise in professional/personal development, Adult Learning, and conflict management.', linkedIn: 'https://www.linkedin.com/in/devin-warrick-47bbb7104/'},
        {jobseeker_name: 'Cori Sternberg' , location: 'Rockford, IL', general_profession: 'Full Stack Software Engineer', description: 'Full Stack Software Engineer', linkedIn: 'https://www.linkedin.com/in/cori-sternberg/'},
        {jobseeker_name: 'Justin Nichols' , location: 'St. Paul, MN', general_profession: 'Full Stack Software Engineer', description: 'Full Stack Software Engineer', linkedIn: 'https://www.linkedin.com/in/justin-nichols-web-dev/'},
        {jobseeker_name: 'Madeline McIntosh' , location: 'Sicklerville, NJ', general_profession: 'Full Stack Software Engineer', description: 'Full Stack Software Engineer', linkedIn: 'https://www.linkedin.com/in/madeline-i-mcintosh-787b3656/'},
        {jobseeker_name: 'Emma Zarate' , location: 'Bee Cave, TX', general_profession: 'Full Stack Software Engineer', description: 'Full Stack Software Engineer', linkedIn: 'https://www.linkedin.com/in/emmazarate/'}
      ]);
    });
};
