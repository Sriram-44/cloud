const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

const options = {
  ssl: true,
  tls: true,
};

let _db;

// sriram04042003:<db_password>@<hostname>/?ssl=true&replicaSet=atlas-4zrc2j-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0

const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb://sriram04042003:spade442003@cluster0.2bird.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", // MongoDB URI
    options
  )
    .then((client) => {
      console.log("database connected.....!!!!!");
      _db = client.db();
      callback();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  } else {
    throw "No Database found";
  }
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
