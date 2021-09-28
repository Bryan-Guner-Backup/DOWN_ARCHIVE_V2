const request = require("supertest");
const unitsRouter = require("./units-router");

describe("Get all units /", () => {
  it("should return 200", () => {
    request(unitsRouter)
      .get("/")
      .then(res => {
        expect(res.status).toBe(200);
      });
  });
});

describe("Get units by ID", () => {
  it("should return 200", () => {
    request(unitsRouter)
      .get("/:id")
      .then(res => {
        expect(res.status).toBe(200);
      });
  });
});

describe("Updates units by ID", () => {
  it("should return 200", () => {
    request(unitsRouter)
      .put("/:id")
      .then(res => {
        expect(res.status).toBe(200);
      });
  });
});

describe(" Deletes units by ID", () => {
  it("should return 200", () => {
    request(unitsRouter)
      .delete("/:id")
      .then(res => {
        expect(res.status).toBe(200);
      });
  });
});