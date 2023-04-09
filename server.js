const express = require("express");

const port = 6969;
const app = express();

app.use("/", require("./src/routing/home"));
app.use("/test", require("./src/routing/test"));
app.use("/static", express.static(path.join(__dirname, "public")));

app.listen(port, function () {
  console.log("App listening on port " + port + ".");
});