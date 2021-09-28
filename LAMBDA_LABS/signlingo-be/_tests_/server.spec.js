// these tests are for the old implementation of the database
// the database has now been refactored by Labs 24 Team. 

/*
**Contributors:
**Seth Cox
**David Isakson
**April - May 2020
*/
const request = require("supertest");

const server = require("../api/server");

describe("SERVER ", () => {
  it("should return 200 OK", function() {
    return request(server)
      .get("/")
      .then(res => {
        expect(res.status).toBe(200);
      });
  });

  it("should set db ENV to testing", function() {
    expect(process.env.DB_ENV).toBe("testing");
  });
});
