// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const db = process.env.db;

// const mongoConnect = (callback) => {
//   MongoClient.connect(db)
//     .then((client) => {
//       console.log("connected");
//       _db = client.db();
//       callback();
//     })
//     .catch((err) => {
//       console.log(err);
//       throw err;
//     });
// };

// const getDb = () => {
//   if (_db) {
//     return _db;
//   }
//   throw "no database found";
// };

// exports.mongoConnect = mongoConnect;
// exports.getDb = getDb;
