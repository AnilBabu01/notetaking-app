const connectoMongo = require("./db");
connectoMongo();
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
var cors = require("cors");

app.use(cors());
app.use(express.json());

app.use("/api/auth/", require("./routes/auth"));
app.use("/api/notes/", require("./routes/notes"));
app.get("/api", (req, res) => {
  res.send("Api is working on Port " + port);
});
app.listen(port, () => {
  console.log(`Take notes app  backend listening at http://localhost:${port}`);
});
