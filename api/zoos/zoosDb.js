const db = require("../../data/dbConfig");

module.exports = {
  get: function(id) {
    let query = db("zoos");

    if (id) {
      const zoo = query.where("id", id).first();
      return zoo;
    }

    return query;
  },

  insert: function(zoo) {
    return db("zoos").insert(zoo);
  },

  update: function(id, zoo) {
    return db("zoos")
      .where("id", id)
      .update(zoo);
  },

  remove: function(id) {
    return db("zoos")
      .where("id", id)
      .del();
  }
};
