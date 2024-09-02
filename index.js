const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

const indexRouter = require("./routes/index.js");

app.listen(PORT, () => {
  console.log(`listening on ${PORT}...`);
});

app.use("/", indexRouter);
app.use("/new", indexRouter);
