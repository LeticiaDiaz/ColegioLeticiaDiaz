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

MongoClient.connect(
  config.mongopath,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  function (err, client) {
    if (err !== null) {
      console.log(err);
    } else {
      db = client.db("colegio");
    }
  }
);

const session = require("express-session");

/* ------------------------------------------------------------------------LOGIN------------------------------------------------------------------------------------------- */

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

app.post(
  "/api/login",
  passport.authenticate("local", {
    successRedirect: "/api",
    failureRedirect: "/api/fail",
  })
);

app.get("/api/logout", function (req, res) {
  req.session.destroy(function (err) {
    res.send({ error: false, mensaje: "Logout correcto" });
  });
});

app.get("/api/fail", function (req, res) {
  res.status(401).send({ error: true, mensaje: "Login Incorrecto" });
});

app.get("/api", function (req, res) {
  const usuario = {
    email: req.user.email,
    nombre: req.user.nombre,
    curso: req.user.curso,
    intolerancia: req.user.intolerancia,
    apellidos: req.user.apellidos,
    nacimiento: req.user.nacimiento,
    madre: req.user.madre,
    telefonomadre: req.user.telefonomadre,
    padre: req.user.padre,
    telefonopadre: req.user.telefonopadre,
  };
  if (req.isAuthenticated() === false) {
    return res
      .status(401)
      .send({ error: true, mensaje: "Necesitas Loguearte" });
  }
  res.send({ error: false, mensaje: "Login Correcto", usuario: usuario });
});

/* ------------------------------------------------------------------------REGISTRO------------------------------------------------------------------------------------------- */

app.post("/api/register", function (req, res) {
  db.collection("alumnos").insertOne(
    {
      email: req.body.email,
      password: req.body.password,
      nombre: req.body.nombre,
      apellidos: req.body.apellidos,
      nacimiento: req.body.nacimiento,
      curso: req.body.curso,
      intolerancia: req.body.intolerancia,
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

app.get("/api/user", function (req, res) {
  if (req.isAuthenticated()) {
    return res.send({ usuario: req.user });
  }
  res.send({ nombre: "No logueado" });
});

app.put("/api/change", function (req, res) {
  console.log(req.body);
  db.collection("alumnos").updateOne(
    { email: req.body.email },
    {
      $set: {
        nombre: req.body.nombre,
        apellidos: req.body.apellidos,
        nacimiento: req.body.nacimiento,
        curso: req.body.curso,
        intolerancia: req.body.intolerancia,
        madre: req.body.madre,
        telefonomadre: req.body.telefonomadre,
        padre: req.body.padre,
        telefonopadre: req.body.telefonopadre,
      },
    },
    function (err, datos) {
      if (err !== null) {
        res.send(err);
      } else {
        res.send({
          error: false,
          mensaje: "Los datos del alumno han sido modificados",
          data: datos,
        });
      }
    }
  );
});

/* ------------------------------------------------------------------------HORARIOS------------------------------------------------------------------------------------------- */

app.put("/horarios", function (req, res) {
  db.collection("horarios")
    .find({ curso: req.body.curso })
    .toArray(function (err, data) {
      if (data.length === 0) {
        res.send({ error: true, mensaje: "No se ha encontrado el curso" });
      } else {
        res.send({ error: false, data: data });
      }
    });
});

/* ------------------------------------------------------------------------COMEDOR------------------------------------------------------------------------------------------- */

app.put("/comedor", function (req, res) {
  console.log(req.body)
  db.collection("intolerancia")
    .find({ intolerancia: req.body.intolerancia })
    .toArray(function (err, data) {
      if (data.length === 0) {
        res.send({
          error: true,
          mensaje: "No se ha encontrado ninguna intolerancia",
        });
      } else {
        res.send({ error: false, data: data });
      }
    });
});

/* ------------------------------------------------------------------------PROFESORES------------------------------------------------------------------------------------------- */

app.get("/profesorado", function (req, res) {
  db.collection("profesores")
    .find()
    .toArray(function (err, datos) {
      if (err != null) {
        res.send(err);
      } else {
        res.send(datos);
      }
    });
});

/* ------------------------------------------------------------------------AGENDA------------------------------------------------------------------------------------------- */

app.get("/agenda", function (req, res) {
  db.collection("agenda")
    .find()
    .toArray(function (err, datos) {
      if (err !== null) {
        res.send({ error: true, mensaje: "Ha habido un error. " + err });
      } else {
        console.log(datos);
        res.send({ error: false, mensaje: "correcto", agenda: datos });
      }
    });
});

app.post(
  "/agenda",
  function (req, res) {
    db.collection("agenda").insertOne({
      title: req.body.title,
      start: req.body.start,
      end: req.body.end,
    });
  },
  function (err, datos) {
    if (err !== null) {
      res.send({ error: true, mensaje: "Ha habido un error. " + err });
    } else {
      res.send({
        error: false,
        mensaje: "correcto",
      });
    }
  }
);

app.listen(3001);
