import {test, it, expect, beforeAll} from 'vitest';
import { app } from '../index.js';
import request from 'supertest';
import resetDB from './helpers/reset.js'

test("POST /sum", async() => {
    beforeAll(async () => {
        await resetDB();
    })
    const { status, body } = await request(app).post("/sum").send({
        a:1, b:2
    })

    expect(status).toBe(200);
    expect(body).toEqual({answer: 3, id: expect.any(Number)});
})