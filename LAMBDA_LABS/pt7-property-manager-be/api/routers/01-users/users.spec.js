const request = require("supertest");
const usersRouter = require("./users-router");

describe("Get all users /", () => {
  it("should return 200", () => {
    request(usersRouter)
      .get("/")
      .then(res => {
        expect(res.status).toBe(200);
      });
  });
});

describe("Get user by ID", () => {
  it("should return 200", () => {
    request(usersRouter)
      .get("/:id")
      .then(res => {
        expect(res.status).toBe(200);
      });
  });
});

describe("Get manager by ID", () => {
  it("should return 200", () => {
    request(usersRouter)
      .get("/manager/:id")
      .then(res => {
        expect(res.status).toBe(200);
      });
  });
});

describe("Updates user by ID", () => {
  it("should return 200", () => {
    request(usersRouter)
      .put("/:id")
      .then(res => {
        expect(res.status).toBe(200);
      });
  });
});

describe(" Deletes User by ID", () => {
  it("should return 200", () => {
    request(usersRouter)
      .delete("/:id")
      .then(res => {
        expect(res.status).toBe(200);
      });
  });
});