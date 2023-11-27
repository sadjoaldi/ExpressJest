const request = require("supertest");
const app = require("./app");

describe("GET /api/movies/:id", () => {
  it("Return a movie when id's passed", async () => {
    const response = await request(app).get("/api/movies/1");

    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.status).toEqual(200);
  });
});

describe("GET /api/movies/:id", () => {
  it("Should return Not found", async () => {
    const response = await request(app).get("/api/movies/0");

   
    expect(response.status).toEqual(404);
  });
});
