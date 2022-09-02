const express = require("express");
const path = require("path");
const methodOverride = require("method-override");
const session = require("express-session");

const mainRouter = require("./routes/mainRouter.routes");
const productsRouter = require("./routes/productsRouter.routes");
const partnersRouter = require("./routes/partnersRouter.routes");
//const authRouter = require('./routes/authRouter');

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "..", "public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: 'somenthingSecret'
}));

app.use("/", mainRouter);
app.use("/products", productsRouter); 
app.use("/partners", partnersRouter);

app.listen(3333,() => {console.log("Server start")});