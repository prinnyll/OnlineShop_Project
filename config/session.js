const expressSession = require("express-session");
const mongoDbStore = require("connect-mongodb-session");

const createSessionStore = () => {
  const MongoDBStore = mongoDbStore(expressSession);
  const store = new MongoDBStore({
    uri: "mongodb://127.0.0.1:27017",
    databaseName: "online-shop",
    collection: "sessions",
  });

  return store;
};

const createSessionConfig = () => {
  return {
    secret: "super-secret-key",
    resave: false,
    saveUninitialized: false,
    store: createSessionStore(),
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7,
    },
  };
};

module.exports = createSessionConfig;
