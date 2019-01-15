const db = require("../../data/dbConfig");

module.exports = {
  get: function(id) {
    let query = db("bears");

    if (id) {
      const bear = query.where("id", id).first();
      return bear;
    }

    return query;
  },

  insert: function (zooId, bear) {
    return db("bears").insert({zooId, ...bear});
  },

  update: function(id, zooId, bear) {
    return db("bears")
      .where("id", id)
      .update({zooId, ...bear});
  },

  remove: function(id) {
    return db("bears")
      .where("id", id)
      .del();
  }
};
