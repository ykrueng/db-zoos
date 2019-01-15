const db = require("../../data/dbConfig");

module.exports = {
  get: function(id) {
    let query = db("zoos");

    if (id) {
      const zoo = query.where('id', id).first();
      return zoo;
    }

    return query;
  }
};
