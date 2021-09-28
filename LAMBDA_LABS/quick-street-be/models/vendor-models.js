const db = require("../data/db-config");

module.exports = {
  findBy,
  add,
  findAll,
  find,
  findByVendorId,
  addVendorProduct,
  addVendorPosts,
  findVendorProducts,
  findVendorPosts,
  findVendorPostsByVendorId,
  updateVendor,
  deleteVendor,
  findZip,
  addVendorBanner,
  findVendorProductsForCustomer,
};

function findBy(filter) {
  return db("users as u")
    .join("vendors as v", "u.id", "v.users_id")
    .select("v.*")
    .where({ "u.id": filter });
}

function findByVendorId(filter) {
  return db("vendors").select("*").where({ id: filter });
}

function findZip(filter) {
  let input = filter.data;
  if (isNaN(input)) {
    // let lowerCase = input.toLowerCase();
    return db("vendors as v")
      .select("*")
      .where({ "v.city": input })
      .orWhere({ "v.business_name": input });
  } else {
    return db("vendors as v").select("*").where({ "v.zipcode": input });
  }
}

function findVendorPosts(user_id) {
  return db("posts as p")
    .join("vendors as v", "v.id", "p.vendors_id")
    .join("users as u", "u.id", "v.users_id")
    .where({ "u.id": user_id })
    .select("p.*");
}

function findVendorPostsByVendorId(user_id) {
  return db("posts as p").where({ "p.vendors_id": user_id }).select("p.*");
}

function updateVendor(users_id, data) {
  return db("vendors as v")
    .where({ "v.users_id": users_id })
    .update(data, ["v.*"])
    .returning("*");
}

function findVendorProducts(filter) {
  return db("vendors as v")
    .join("products as p", "v.id", "p.vendor_id")
    .select("p.*")
    .where({ "v.users_id": filter });
}

function findVendorProductsForCustomer(filter) {
  return db("vendors as v")
    .join("products as p", "v.id", "p.vendor_id")
    .select("p.*")
    .where({ "v.id": filter });
}

//product update
function addVendorProduct(data) {
  return db("products").insert(data).returning("*");
}

function deleteVendor(id) {
  return db("vendors").where({ id }).del();
}

function add(newVendor) {
  return db("vendors").insert(newVendor);
}

function findAll() {
  return db("vendors").select(
    "vendors.zipcode",
    "vendors.address",
    "vendors.city"
  );
}

function find() {
  return db("vendors").select("*");
}

function addVendorPosts(data) {
  return db("posts").insert(data).returning("*");
}

function addVendorBanner(vendor_id, image_data) {
  return db("vendors")
    .where({ users_id: vendor_id })
    .update({ public_id: image_data });
}
