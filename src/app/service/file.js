const mongo = require("../../common/lib/mongo");
const Model = require("../model/file");

module.exports.findOneImage = async (req, res, next) => {
  const filename = req.params.filename;
  if (req.headers["if-none-match"] == filename) return res.sendStatus(304);

  const file = await Model.findOne({ filename });
  if (!file) return res.sendStatus(404);

  res.set("ETag", file.filename);
  res.set("Content-Type", file.contentType);
  res.set("Cache-Control", "public, max-age=2592000");
  mongo.bucket.openDownloadStreamByName(filename).pipe(res);
};
