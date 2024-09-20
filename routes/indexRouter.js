const { Router } = require("express");
const path = require("node:path");

const indexRouter = Router();
const options = { root: path.join(__dirname, "../") };

indexRouter.get("/", (req, res) => res.send("Hello World"));
indexRouter.get("/contact-me", (req, res) =>
  res.sendFile("./contact-me.html", options)
);
indexRouter.get("/about", (req, res) => res.sendFile("./about.html", options));
indexRouter.get("*", (req, res) =>
  res.status(404).sendFile("./404.html", options)
);

module.exports = indexRouter;
