const express = require("express");
const app = express();

const options = { root: __dirname };

app.get("/", (req, res) => res.send("Hello World"));
app.get("/contact-me", (req, res) =>
  res.sendFile("./contact-me.html", options)
);
app.get("/about", (req, res) => res.sendFile("./about.html", options));
app.get("*", (req, res) => res.status(404).sendFile("./404.html", options));

const PORT = 3000;
app.listen(PORT, () =>
  console.log(`My first Express app - listening on port ${PORT}`)
);
