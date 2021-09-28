const db = require("../db/config");
const bcrypt = require("bcrypt");

class helperCreator {
  constructor(table) {
    this.table = table;
  }
  getAll() {
    return db(this.table);
  }
  async findBy(filter) {
    try {
      return await db(this.table).select("*").where(filter).first();
    } catch (e) {
      console.log(e);
      return e;
    }
  }
  async findById(id) {
    return db(this.table).select("*").where("id", id).first();
  }
  update(id, data) {
    try {
      return db(this.table).update(data).where({ id: id });
    } catch (e) {
      console.log(e.message);
    }
  }
}

class techHelperCreator extends helperCreator {
  constructor(table, joinTable, interTable) {
    super(table);
    this.joinTable = joinTable;
    this.interTable = interTable;
  }

  async updateTech(userID, techID) {
    return db(this.interTable).insert({ user_id: userID, tech_id: techID });
  }
  async userTech(id) {
    return db("user_tech as ut")
      .join("user as u", "u.id", "ut.user_id")
      .join("tech as t", "t.id", "ut.tech_id")
      .where("u.id", id)
      .select("t.name", "t.type", "t.id");
  }
}

class userHelperCreator extends helperCreator {
  constructor(table) {
    super(table);
  }
  async createUser(user) {
    user.password = await bcrypt.hash(user.password, 10);
    await db(this.table).insert(user);
    return this.registerReturn(user.email);
  }
  async registerReturn(email) {
    return db(this.table)
      .select("id", "email", "user_type")
      .where("email", email)
      .first();
  }
}

class connectionHelper extends helperCreator {
  constructor(table) {
    super(table);
  }
  async updateConnection(mentee_id, mentor_id) {
    return db(this.table).insert({ userReq: mentee_id, userAcc: mentor_id });
  }
  async requestConnection(id) {
    return db("user_connections as ut").where("ut.userAcc", id).select("*");
  }
  async responseConnection(userAcc, userReq, data) {
    try {
      return await db(this.table)
        .update(data)
        .where({ userAcc: userAcc, userReq: userReq });
    } catch (e) {
      console.log(e);
      return e;
    }
  }
  async newConnections(id) {
    try {
      return await db(this.table)
        .where("userAcc", id)
        .where("status", false)
        .where("rejected", false)
        .select("*");
    } catch (e) {
      console.log(e.message);
      return e;
    }
  }
  async newConnectionRequests(id) {
    try {
      return await db(this.table)
        .where("userReq", id)
        .where("status", false)
        .where("rejected", false)
        .select("userAcc");
    } catch (e) {
      console.log(e.message);
      return e;
    }
  }
  async myConnections(id) {
    try {
      return await db(this.table)
        .where("userAcc", id)
        .orWhere("userReq", id)
        .andWhere("status", true)
        .andWhere("rejected", false)
        .select("*");
    } catch (e) {
      console.log(e.message);
      return e;
    }
  }
  async allMyConnections(id) {
    console.log(id);
    try {
      return await db(this.table)
        .where("userAcc", id)
        .orWhere("userReq", id)
        .select("*");
    } catch (e) {
      console.log(e, id);
      return [{ userReq: id, userAcc: id, status: true, rejected: false }];
    }
  }
}

const userHelper = new userHelperCreator("user");
const jobHelper = new helperCreator("job_title");
const locationHelper = new helperCreator(
  "location",
  "latitude",
  "longitude"
);
const connectHelper = new connectionHelper("user_connections");
const techHelper = new techHelperCreator("tech", "user", "user_tech");

module.exports = {
  userHelper,
  jobHelper,
  locationHelper,
  techHelper,
  connectHelper,
};
