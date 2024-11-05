// install dependencies
const { execSync } = require('child_process');
execSync('npm install');
execSync('npm run seed');

const request = require("supertest")
const { db } = require('./db/connection');
const { Musician } = require('./models/index')
const app = require('./src/app');
const {seedMusician} = require("./seedData");
const exp = require('constants');
const { deserialize } = require('v8');


describe('./musicians endpoint', () => {
    const request = require("supertest");

    test("Testing musicians endpoint", async () => {
        const response = await request(app).get("/musicians");
    })

    test("Testing musicians endpoint", async () => {
        const response = await request(app).get("/musicians");
        expect(response.statusCode).toBe(200);
    })

    test("Testing musicians endpoint", async () => {
        const response = await request(app).get("/musicians");
        const responseData = JSON.parse(response.text);
        expect(responseData).toBeInstanceOf(Array);
        expect(responseData.length).toBeGreaterThan(0);
    })
})
describe('/musicians/:id endpoint', () => {
    test("Testing musicians/:id endpoint with valid id" , async() => {
        const validId = 1;
        const response = await request(app).get(`/musicians/${validId}`);

        expect(response.statusCode).toBe(200);
        
        expect(response.body).toBeInstanceOf(Object);
        expect(response.body.id).toBe(validId);

    })
})
