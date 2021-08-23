const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  filename: { type: String },
  length: { type: Number },
  chunkSize: { type: Number },
  md5: { type: String },
  contentType: { type: String },
  metadata: { type: Object },
});

module.exports = mongoose.model("fs.files", schema);
