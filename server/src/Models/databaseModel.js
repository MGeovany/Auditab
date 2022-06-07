const mongoose = require("mongoose");

const databaseSchema = mongoose.Schema(
  {
    datebackedup: { type: Date, require: true },
    description: { type: String, require: true },
  },
  {
    collection: "DataBase",
  }
);

module.exports = mongoose.model("DataBase", databaseSchema);
