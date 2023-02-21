const express = require("express");
const productRoutes = require("./routes");
const PORT = 8080;
const HOST = "0.0.0.0";
// front
// axios.post("/products", {
//   name: "phone",
//   description: "it is new",
// });
const app = express();
app.use(express.json());
app.use("/api/", productRoutes);
app.use(express.json());
app.post("/products", (req, res) => {
  res.send(req.bodu);
});
app.listen(PORT, HOST);
