const playerActions = require('./player-actions');

describe("player actions", () => {

  test("find", async () => {
    const res = await playerActions.find();
    expect(res.length).toBeGreaterThan(600);
  })

  test("findById", async () => {
    const res = await playerActions.findById(1);
    expect(res).toEqual([{
      "arm": 0, "bench": 0, "broad": 111, 
      "col": "Miami (FL)", "cone": 0, 
      "currentTeam": "LAC", "dcp": 1, 
      "dob": "7/28/95", "dpos": 0, 
      "dv": "Atlantic Coast (ACC)", 
      "forty": 4.94, "hand": 0, "height": 70, 
      "id": 1, "jnum": 4, "playerFirst": "Michael", 
      "playerFull": "Michael Badgley", 
      "playerID": "MB-0020", "playerLast": "Badgley", 
      "position": "K", "shuttle": 0, "startYear": 2018, 
      "vertical": 0, "weight": 186
    }])
  })
})