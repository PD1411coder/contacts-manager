const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const ConnetToDb = require("./config/db");
const auth = require("./routes/auth");
<<<<<<< HEAD
const ContactRoute = require("./routes/ContactsRoute");
const JWT = require("./middleware/JWT");
=======
const contact = require('./routes/ContactsRoute')
const fetchuser = require("./middleware/JWT");
>>>>>>> 0caaa142d454f28308aa10b0c8060e6785815efa
//middleware
dotenv.config();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//routes
app.get("/protected", JWT, (req, res) => {
  return res.status(200).json({
    user: req.user._doc
  });
});
<<<<<<< HEAD
app.use('/api', auth);
app.use('/api', ContactRoute)
=======

// app.get("/protected", fetchuser, (req, res) => {
//   return res.status(200).json({
//     user: req.user
//   });
// });
app.use('/api', auth);
app.use('/api', contact)
>>>>>>> 0caaa142d454f28308aa10b0c8060e6785815efa
//port
const PORT =process.env.PORT || 5000;
app.listen(PORT, async() => {
  try{
    await ConnetToDb();
    console.log(`Server started on port ${PORT}`);
  }catch(err){
    console.log(err);
  }
});
