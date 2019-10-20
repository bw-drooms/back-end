const db = require('../../data/dbConfig.js');

module.exports = {
    getJobs
}

function getJobs() {
    return db('company')
}