/**
 * @jest-environment node
 */
const request = require('supertest');
const server = require('../app');

describe('Auth router', () => {
    test('should run the test', () => {
        expect(true).toBe(true);
    });

    describe('POST /api/auth', () => {
        test('/login should return 200 with the user and a token', async () => {
            const res = await request(server)
                .post('/api/auth/login')
                .send({ username: process.env.TEST_USER, password: process.env.TEST_USER_PASSWORD });
            expect(res.status).toBe(200);
            expect(res.body).toMatchObject({
                id: expect.any(String),
                email: expect.stringMatching(process.env.TEST_USER),
                firstName: expect.stringMatching('Bob'),
                lastName: expect.stringMatching('Johnson'),
                licenseId: null,
                phone: expect.any(String),
                question: expect.any(String),
                image: null,
                roleId: expect.any(Number),
                role: expect.any(Object),
                token: expect.any(String)
            });
        });
    });

    describe('GET api/auth/securityquestion/:id', () => {
        test('with a valid id, should return status 200 and an object with a question.', async () => {
            const id = 1;
            const res = await request(server).get(`/api/auth/securityquestion/tiDTfeNF1KcEkW97gPLIpG85iub2`);
            expect(res.status).toBe(200);
            expect(res.body).toMatchObject({ question: expect.any(String) });
        });

        const testError = (testStatement, url, expectedStatus) => {
            test(testStatement, async () => {
                const res = await request(server).get(url);
                expect(res.status).toBe(expectedStatus);
                expect(res.body).toMatchObject({});
            });
        }
        testError('with an invalid id you should get a status 500.', `/api/auth/securityquestion/2`, 500);
        testError('if the user doesn\'t have a security question, you should get an error 400', `/api/auth/securityquestion/nMAqmtW3qAWIpBzPUE1DXxxw5aB2`, 400);
    });

    describe('GET api/auth/questions', () => {
        test('should return a status 200 with an array of question objects', async () => {
            const res = await request(server).get('/api/auth/questions');
            expect(res.status).toBe(200);
            expect(Array.isArray(res.body)).toBe(true);
            expect(res.body[0]).toMatchObject({
                question: expect.any(String),
                questionText: expect.any(String)
            });
        })
    })
});