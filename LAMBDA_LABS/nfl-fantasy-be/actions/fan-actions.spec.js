const fanActions = require('./fan-actions');
  // remove

describe("fan actions", () => {

  test("find", async () => {
    const res = await fanActions.find();
    expect(res.length).toBeGreaterThan(0);
  })

  test("findById", async () => {
    const res = await fanActions.findById(1);
    expect(res).toEqual({
      "city": "Greenville", 
      "email": "tiffany@email.com", 
      "fan_id": 1, 
      "first_name": "Tiffany", 
      "last_name": "Simionescu", 
      "password": "123456", 
      "state": "SC", 
      "username": "tiffany87"
    });
  })

  test("add", async () => {
    const res = await fanActions.add({
      "username": "tiffany91",
      "password": "123456",
      "first_name": "Tiffany",
      "last_name": "Simionescu",
      "email": "tiffany91@email.com",
      "city": "Easley",
      "state": "SC"
    });
    expect(res.first_name).toBe('Tiffany');
  })

  test("update", async () => {
    const res = await fanActions.update(1, {
      "city": "Easley", 
      "email": "tiffany@email.com", 
      "fan_id": 1, 
      "first_name": "Tiffany", 
      "last_name": "Simionescu", 
      "password": "123456", 
      "state": "SC", 
      "username": "tiffany87"
    });
    expect(res).toEqual(1)
  })

  test("remove", async () => {
    const res = await fanActions.remove(2);
    expect(res).toBe(1);
  });
})