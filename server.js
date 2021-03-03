/** @format */

const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

app.use(express.static("client/build"));

app.get("*", async (req, res) => {
  const filePath = path.resolve(__dirname, "client/build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return res.json("Something went wrong");
    }
    return res.send(data);
  });
});

const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
  console.log(`server is up and running at port ${PORT}`);
});
