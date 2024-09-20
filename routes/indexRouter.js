const { Router } = require("express");

const indexRouter = Router();

indexRouter.get("/", (req, res) => res.render("index"));
indexRouter.get("/contact-me", (req, res) => res.render("contact-me"));
indexRouter.get("/about", (req, res) =>
  res.render("about", { message: "This is the about page!" }),
);
indexRouter.get("*", (req, res) => res.status(404).render("404"));

module.exports = indexRouter;
