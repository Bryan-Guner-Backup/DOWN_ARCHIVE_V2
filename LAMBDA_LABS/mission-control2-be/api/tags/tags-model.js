const db = require("../../data/db-config.js");

module.exports = {
  find,
  findById,
  findByName,
  add,
  update,
  remove,
  findTagsOfProject,
  addTagToProject,
  removeTagOfProject,
};

function find() {
  return db("tags");
}

function findById(id) {
  return db("tags").where({ id }).first();
}

function findByName(name) {
  return db("tags").where({ name: name }).select("id");
}

function add(tag) {
  return db("tags")
    .insert(tag, "id")
    .then(([id]) => {
      return this.findById(id);
    });
}

function update(id, changes) {
  return db("tags")
    .where({ id })
    .update(changes)
    .then((count) => (count > 0 ? this.findById(id) : null));
}

function remove(id) {
  return db("tags").where({ id }).del();
}

function findTagsOfProject(projectKey) {
  return db("projects as p")
    .where("p.id", projectKey)
    .join("project_tag as pt", "p.id", "pt.projectKey")
    .join("tags as t", "pt.tagKey", "t.id")
    .select("t.name as tag_name", "p.name as project_name");
}

function addTagToProject(tagId, projectKey) {
  return db("project_tag")
    .insert({
      projectKey: projectKey,
      tagKey: tagId,
    })
    .then(() => this.findTagsOfProject(projectKey));
}

function removeTagOfProject(tagId, projectKey) {
  return db("project_tag")
    .where({
      projectKey: projectKey,
      tagKey: tagId,
    })
    .del();
}
