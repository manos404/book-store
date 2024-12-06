const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const errorControllers = require("./controllers/error");
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.get("/favicon.ico", (req, res) => res.status(204).end());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorControllers.get404);

app.listen(3000);
