const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.listen(5000, () => {
  console.log("server is listening on port 5000");
});

module.exports = {
  listen: app,
};
