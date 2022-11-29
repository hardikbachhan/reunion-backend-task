const assert = require("assert");
const app = require("../app");
const express = require("express");
app.use(express.json());
const request = require("supertest");

describe("POST /api/authenticate", function () {
    it("should respond with JWT", async function () {
        const payload = {
            email: "hardik@gmail.com",
            password: "hardik123456",
        };
        const res = await request(app)
            .post("/api/authenticate")
            .send(payload)
            .set("Content-Type", "application/json")
            .set("Accept", "application/json")
            .expect(200);
        const token = res.body.token;
        assert.ok(token && token.split(".").length === 3);
    });
});
