const request = require("supertest");
const db = require("../../../database/db-config");
const authRouter = require("./auth-router");
const { addUser, findBy } = require("./../01-users/users-model");

const User = require("../01-users/users-model");

// REGISTER
describe("User Model /", () => {
  describe("addUser", () => {
    beforeEach(async () => {
      await db("users").truncate();
    });

    it("it should return a user", async () => {
      await addUser({
        firstName: "Darren10",
        lastName: "Carrillo",
        email: "darren10@gmail.com",
        password: "1234567",
        phoneNumber: "1234567891",
        role: "Manager",
        img:
          "https://www.andrewcollings.com/wp-content/uploads/2019/06/Hero-01-009-Chicago-Studio-Corporate-Headshot.jpg-V.jpg-1024x683-JPG60.JPG-1024x683.jpg"
      });

      const user = await db("users");
      expect(user).toHaveLength(1);
    });
  });
});

describe("Auth Router /", () => {
  it("should return 200", () => {
    request(authRouter)
      .post("/register")
      .then(res => {
        expect(res.status).toBe(200);
      });
  });
});

describe("Auth Router /", () => {
  it("should return 200 upon login", () => {
    request(authRouter)
      .post("/login")
      .then(res => {
        expect(res.status).toBe(200);
      });
  });
});