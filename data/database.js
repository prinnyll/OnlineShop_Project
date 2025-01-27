const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

const url =
  "mongodb+srv://johnnyffaa:<9NbLylSgwshLGk1A>@cluster0.sssjw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
module.exports = client;

let mongodbUrl = "mongodb://127.0.0.1:27017";

if (process.env.MONGODB_URL) {
  mongodbUrl = process.env.MONGODB_URL;
}

let database;
// async function connectToDatabase() {
//   const client = await MongoClient.connect("mongodb://127.0.0.1:27017");
//   database = client.db("auth-blog");
const connectToDatabase = async () => {
  client = await MongoClient.connect(mongodbUrl);
  database = client.db("online-shop");
};
const getDb = () => {
  if (!database) {
    throw new Error("You must connect to the database first!");
  }
  return database;
};

module.exports = { connectToDatabase: connectToDatabase, getDb: getDb };
