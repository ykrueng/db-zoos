const db = require("../../data/dbConfig");

module.exports = {
  get: function(id) {
    let query = db("zoos");

    if (id) {
      return query.where("id", id).first();
    }

    return query;
  }
};
