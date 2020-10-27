process.env.TEST = true;

const supertest = require('supertest');
const app = require('../../server/server');
const agent = supertest.agent(app);

const pool = require('../../server/modules/pool');

describe('Updating a users cohort', () => {
    let user;

    beforeEach(async () => {
        // Clean up my user table
        await pool.query('DELETE FROM "user"')

        // SETUP: Register a new user
        let registerRes = await agent
            .post('/api/user/register')
            .send({
                username: 'edan123',
                password: 'testpass',
                fullName: 'Edan Schwartz'
            });
        expect(registerRes.statusCode).toBe(201);
        user = registerRes.body;
        expect(user.username).toBe('edan123');

        // SETUP: make our user an instructor
        await pool.query(`
        UPDATE "user"
        SET "authLevel" = 'INSTRUCTOR'
        WHERE "id" = $1
      `, [user.id]);

        // SETUP: Login as our new user
        let loginRes = await agent
            .post('/api/user/login')
            .send({ username: 'edan123', password: 'testpass' });
        expect(loginRes.statusCode).toBe(200);
    });