const express = require("express");
const http = require("http");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "/")));

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname + "/docs/index.html"));
// });

const port = process.env.PORT || 3001;
app.set("port", port);

const server = http.createServer(app);
server.listen(port, () =>
  console.log("running dev server on PORT " + port + "")
);
