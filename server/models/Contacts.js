const mongoose = require("mongoose");

const schema = mongoose.Schema;

const contactSchema = new schema({
  name: { type: String },
  destination: { type: String },
  company: { type: String },
  industry: { type: String },
  email: { type: String },
  phonenumber: { type: String },
  country: { type: String },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Contacts = mongoose.model("Contacts", contactSchema);
module.exports = Contacts;
