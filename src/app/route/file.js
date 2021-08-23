const express = require("express");
const mongo = require("../../common/lib/mongo");
const { findOneImage } = require("../service/file");
const routes = express.Router();

routes.post("/upload/image", mongo.image.single("file"), (req, res, next) => {
  next(req.file);
});

routes.get("/image/:filename", findOneImage);

module.exports = routes;
