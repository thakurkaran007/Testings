import {describe, expect, test, it} from '@jest/globals';
import request from 'supertest';
import { app } from '../index';


describe("POST /sum", () => {
    it("should return the sum of two numbers", async () => {
        const res = await request(app).post("/sum").send({
            a: 1,
            b: 2
        });
        expect(res.status).toBe(200);
        expect(res.body.sum).toBe(3);
    })

    it("should return 411 if no body", async () => {
        const res = await request(app).post("/sum").send({});
        expect(res.status).toBe(411);
        expect(res.body.message).toBe("Incorrect inputs");
    })
})

describe("GET /sum", () => {
    it("should return sum of two numbers", async () => {
        const res = await request(app)
            .get("/sum")
            .set({
                a: "1",
                b: "2"
        });

        expect(res.status).toBe(200);
        expect(res.body.sum).toBe(3);
    })
    it("should return 411 on wrong data", async () => {
        const res = await request(app)
            .get("/sum")
            .set({b: "1"});

        expect(res.status).toBe(411);
        expect(res.body.message).toBe("Incorrect inputs");
    })
})