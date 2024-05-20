const express = require("express");
const request = require("supertest");
const { hello } = require("./handler");

describe("GET /hello", () => {
  let app;

  beforeAll(() => {
    app = express();
    app.get("/hello", hello);
  });

  it("should return 'Hello World 1111222!'", async () => {
    const res = await request(app).get("/hello");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hello World 11112223!");
  });

  it("should not return 'Goodbye World'", async () => {
    const res = await request(app).get("/hello");
    expect(res.statusCode).toBe(200);
    expect(res.text).not.toBe("Goodbye World");
  });
});
