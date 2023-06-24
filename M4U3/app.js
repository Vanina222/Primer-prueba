var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

// la primer ruta ya se generó sola... index = Home
var indexRouter = require("./routes/index");
//var usersRouter = require("./routes/users");
// creo las rutas a las otras paginas
var productosRouter = require("./routes/productos");
var preciosRouter = require("./routes/precios");
var promocionRouter = require("./routes/promocion");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
//app.use("/users", usersRouter);
app.use("/productos", productosRouter);
app.use("/precios", preciosRouter);
app.use("/promocion", promocionRouter);

// Mis pruebas

app.get("/prueba1", function (req, res) {
  res.send("Hola soy la página de prueba 1");
});

app.get("/prueba2", function (req, res) {
  res.send("Hola soy la página de prueba 2");
});

app.get("/prueba3", function (req, res) {
  res.send("Hola soy la página de prueba 3");
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
