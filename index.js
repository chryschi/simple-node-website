const express = require("express");
const app = express();
const indexRouter = require("./routes/indexRouter");

app.use("/", indexRouter);

const PORT = 3000;
app.listen(PORT, () =>
  console.log(`My first Express app - listening on port ${PORT}`)
);
