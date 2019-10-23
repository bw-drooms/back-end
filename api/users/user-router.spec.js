const db = require('../../data/dbConfig.js');
const request = require('supertest');
const server = require('../../api/server.js')
const getType = require('jest-get-type');

describe('GET /jobs', () => {

    it('it should return data in json format', async () => {
        const response = await request(server).get('/api/jobs')
        expect(getType(response)).toBe("object")
    })
})

describe('POST /register', () => {
    beforeEach(async() => {
        await db('users')
            .truncate();
    })

    it('should save new user name correctly to db', async () => {        
        const newUser = await request(server).post('/api/register')
            .send({ username: 'Nadine', password: 'surf10' })
            expect(newUser.body.username).toMatch("Nadine")
        
    })

    it('should return a status of 201', async () => {
        const response = await request(server).post('/api/register')
        .send({ username: 'Nadine', password: 'surf10' })
        expect(response.status).toBe(201)
    })

})



