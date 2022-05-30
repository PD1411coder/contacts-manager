const mongoose = require("mongoose");

const ConnetToDb = async() => {
  return mongoose
  .connect("mongodb://localhost/contacts_manager")
  .then(() => {
    console.log("mongoose connect");
  })
  .catch(err => {
    console.log(err);
  }
  );
};

module.exports = ConnetToDb;
