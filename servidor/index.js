const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const cors = require("cors");
const passport = require("passport");

const app = express();
const config = require("./config.json");

let db;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

MongoClient.connect(config.mongopath, function (err, client) {
  if (err !== null) {
    console.log(err);
  } else {
    db = client.db("colegio");
  }
});

app.post(
  "/api/login",
  passport.authenticate("local", {
    successRedirect: "/api",
    failureRedirect: "/api/fail",
  })
);

app.get("/api/fail", function (req, res) {
  res.status(401).send({ mensaje: "denegado" });
});

app.get("/api", function (req, res) {
  if (req.isAuthenticated() === false) {
    return res.status(401).send({ mensaje: "necesitas loguearte" });
  }
  res.send({ mensaje: "logueado correctamente" });
});

app.post("/registro/alumno", function (req, res) {
  db.collection("alumnos").insertOne(
    {
      email: req.body.email,
      password: req.body.password,
      nombre: req.body.nombre,
      apellidos: req.body.apellidos,
      nacimiento: req.body.nacimiento,
      curso: req.body.curso,
      madre: req.body.madre,
      telefonomadre: req.body.telefonomadre,
      padre: req.body.padre,
      telefonopadre: req.body.telefonopadre,
    },
    function (err, datos) {
      if (err !== null) {
        res.send(err);
      } else {
        res.send({ mensaje: "Registrado" });
      }
    }
  );
});

const session = require("express-session");
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
const LocalStrategy = require("passport-local").Strategy;
passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
    },
    function (email, password, done) {
      db.collection("alumnos")
        .find({ email: email })
        .toArray(function (err, users) {
          if (users.length === 0) {
            done(null, false);
          }
          const user = users[0];
          if (password === user.password) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        });
    }
  )
);

new LocalStrategy(
  {
    usernameField: "email",
  },
  function (email, password, done) {
    db.collection("alumnos")
      .find({ email: email })
      .toArray(function (err, users) {
        if (users.length === 0) {
          done(null, false);
        }
        const user = users[0];
        if (password === user.password) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      });
  }
);

passport.serializeUser(function (user, done) {
  done(null, user.email);
});

passport.deserializeUser(function (id, done) {
  db.collection("alumnos")
    .find({ email: id })
    .toArray(function (err, users) {
      if (users.length === 0) {
        done(null, null);
      }
      done(null, users[0]);
    });
});

app.get("/api/user", function (req, res) {
  if (req.isAuthenticated()) {
    return res.send({ nombre: req.user.name });
  }
  res.send({ nombre: "No logueado" });
});

app.listen(3001);
