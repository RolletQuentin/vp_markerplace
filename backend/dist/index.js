"use strict";
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// src/middlewares/exceptions.handler.ts
var ExceptionsHandler;
var init_exceptions_handler = __esm({
  "src/middlewares/exceptions.handler.ts"() {
    "use strict";
    ExceptionsHandler = (err, req, res, next) => {
      if (res.headersSent) {
        return next(err);
      }
      if (err.status && err.error) {
        return res.status(err.status).json({ error: err.error });
      }
      return res.status(500).json({ error: "Erreur interne" });
    };
  }
});

// src/utils/exceptions.ts
var Exception, NotFoundException;
var init_exceptions = __esm({
  "src/utils/exceptions.ts"() {
    "use strict";
    Exception = class {
      constructor(error, status) {
        this.error = error;
        this.status = status;
      }
    };
    NotFoundException = class extends Exception {
      constructor(error) {
        super(error, 404);
      }
    };
  }
});

// src/middlewares/unknownRoutes.handler.ts
var UnknownRoutesHandler;
var init_unknownRoutes_handler = __esm({
  "src/middlewares/unknownRoutes.handler.ts"() {
    "use strict";
    init_exceptions();
    UnknownRoutesHandler = () => {
      throw new NotFoundException("La ressource demand\xE9e n'existe pas");
    };
  }
});

// src/models/User.ts
var require_User = __commonJS({
  "src/models/User.ts"(exports, module2) {
    "use strict";
    var mongoose = require("mongoose");
    var uniqueValidator = require("mongoose-unique-validator");
    var userSchema = mongoose.Schema({
      email: { type: String, required: true, unique: true },
      password: { type: String, required: true }
    });
    userSchema.plugin(uniqueValidator);
    module2.exports = mongoose.model("User", userSchema);
  }
});

// src/ressources/admin/admin.service.ts
var jwt, bcrypt, User, AdminService;
var init_admin_service = __esm({
  "src/ressources/admin/admin.service.ts"() {
    "use strict";
    jwt = require("jsonwebtoken");
    bcrypt = require("bcrypt");
    User = require_User();
    AdminService = class {
      async signup(req, res) {
        bcrypt.hash(req.body.password, 10).then((hash) => {
          const user = new User({
            email: req.body.email,
            password: hash
          });
          user.save().then(
            () => res.status(201).json({ message: "Utilisateur cr\xE9\xE9 !" })
          ).catch((error) => res.status(400).json({ error }));
        }).catch((error) => res.status(500).json({ error }));
      }
      async login(req, res) {
        User.findOne({ email: req.body.email }).then((user) => {
          if (!user) {
            return res.status(401).json({
              message: "Paire login/mot de passe incorrecte"
            });
          }
          bcrypt.compare(req.body.password, user.password).then((valid) => {
            if (!valid) {
              return res.status(401).json({
                message: "Paire login/mot de passe incorrecte"
              });
            }
            res.status(200).json({
              userId: user._id,
              token: jwt.sign(
                { userId: user._id },
                "RANDOM_TOKEN_SECRET",
                { expiresIn: "24h" }
              )
            });
          }).catch((error) => res.status(500).json({ error }));
        }).catch((error) => res.status(500).json({ error }));
      }
    };
  }
});

// src/ressources/admin/admin.controller.ts
var import_express, AdminController, service;
var init_admin_controller = __esm({
  "src/ressources/admin/admin.controller.ts"() {
    "use strict";
    import_express = require("express");
    init_admin_service();
    AdminController = (0, import_express.Router)();
    service = new AdminService();
    AdminController.post("/login", service.login);
    AdminController.post("/signup", service.signup);
  }
});

// src/app.ts
var require_app = __commonJS({
  "src/app.ts"(exports, module2) {
    "use strict";
    init_exceptions_handler();
    init_unknownRoutes_handler();
    init_admin_controller();
    var fs = require("fs");
    var express = require("express");
    var mongoose = require("mongoose");
    var app2 = express();
    var connectiondb = "";
    mongoose.set("strictQuery", false);
    fs.exists("config.json", (doesExists) => {
      if (doesExists) {
        const file = fs.readFileSync("config.json");
        const config2 = JSON.parse(file);
        connectiondb = config2.connectiondb;
        mongoose.connect(connectiondb, {
          useNewUrlParser: true,
          useUnifiedTopology: true
        }).then(() => console.log("Connexion \xE0 MongoDB r\xE9ussie !")).catch((err) => {
          console.log("Connexion \xE0 MongoDB \xE9chou\xE9e !");
          console.log(err);
        });
      } else {
        console.log("Missing config file");
      }
    });
    app2.use(express.json());
    app2.use((req, res, next) => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
      );
      res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, PATCH, OPTIONS"
      );
      next();
    });
    app2.use("/api/auth", AdminController);
    app2.all("*", UnknownRoutesHandler);
    app2.use(ExceptionsHandler);
    module2.exports = app2;
  }
});

// src/config.ts
var config = {
  API_PORT: 8e3
};

// src/index.ts
var http = require("http");
var app = require_app();
var normalizePort = (val) => {
  const port2 = parseInt(val, 10);
  if (isNaN(port2)) {
    return val;
  }
  if (port2 >= 0) {
    return port2;
  }
  return false;
};
var port = normalizePort(process.env.PORT || config.API_PORT.toString());
app.set("port", process.env.PORT || config.API_PORT);
var errorHandler = (error) => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const address = server.address();
  const bind = typeof address === "string" ? "pipe" + address : "port: " + port;
  switch (error.code) {
    case "EACCESS":
      console.error(bind + " requires elevated privileges.");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use.");
      process.exit(1);
      break;
    default:
      throw error;
  }
};
var server = http.createServer(app);
server.on("error", errorHandler);
server.on("listening", () => {
  const address = server.address();
  const bind = typeof address === "string" ? "pipe" + address : "port " + port;
  console.log("Listening on " + bind);
});
server.listen(port);
